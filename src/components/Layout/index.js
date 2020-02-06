import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody, getProps } from '../../util';
import './index.css';

class Layout extends MetaComponent {
	constructor() {
		super(global.storage);
	}

	// eslint-disable-next-line class-method-use-this
	render() {
		this.props = getProps(this)
		console.log(this.props)
		this.getHtmlFile(this.props.src)
		return `
			
		`
	}

	getLayout(html) {
		const b = getBody(this);
		this.innerHTML = html;
		const wrapper = this.querySelector('*[pretty-layout-content]');
		if (wrapper !== null) {
			wrapper.innerHTML = b;
			const scripts = wrapper.querySelectorAll('script');
			for (let i = 0; i < scripts.length; i++) {
				const scp = scripts[i];
				console.log(scp);
			}
		} else {
			console.warn('The body will be lost, you need to define [pretty-layaout-content] attribute to any element','==>',b);
		}
	}

	/**
	 * Fetch HTML
	 * @param {String} src 
	 */
	getHtmlFile(src) {
		let headers = new Headers();
		headers.append('Content-Type', 'text/html');
		fetch(src,{
			method: 'get',
			headers
		}).then((response) => {
			response.text().then((html) => {
				this.getLayout(html);
			})
		}).catch((err) => {
			console.warn('Pretty-layout error: ',err)
		});
	}
	
	handleStoreEvents() {
		return {
		}
	}

	addListeners() {
		let observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					this.props = getProps(this);
					this.innerHTML = this.render();
				}
			});
		});
		
		observer.observe(this, {
			attributes: true //configure it to listen to attribute changes
		});
	}
}

window.customElements.define('pretty-layout', Layout)