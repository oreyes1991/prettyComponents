import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Template extends MetaComponent {
	constructor() {
		super(global.storage);
	}

	//eslint-disable-next-line class-method-use-this
	render() {
		// fetch asyncronumous html file
		this.getHTMLString();
		return `
			<div class="p-template-box">

			</div>
		`
	}

	addListeners() {
		let observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					this.innerHTML = this.render();
				}
			});
		});
		
		observer.observe(this, {
			attributes: true //configure it to listen to attribute changes
		});
	}

	 getHTMLString() {
		const { src } = this.getProps();
		if (src) {
			let headers = new Headers();
			headers.append('Content-Type', 'text/html');
			fetch(src,{
				method: 'get',
				headers
			}).then((response) => {
				response.text().then((html) => {
					this.storage.dispatch({ type: 'P_TEMPLATE_HTML', data: { html } })
				})
			}).catch((err) => {
				console.err('Pretty-template error: ',err)
			});
		}
	}

	getProps() {
		return {
			src: this.getAttribute('src') !== null ? this.getAttribute('src') : undefined
		}
	}

	handleStoreEvents() {
		return {
			'P_TEMPLATE_HTML': (action) => {
				this.querySelector('.p-template-box').innerHTML = action.data.html;
				this.querySelectorAll('.p-template-box script').forEach(sc => {
					eval(sc.innerHTML);
				})
			}
		}
	}

}

window.customElements.define('pretty-template', Template);