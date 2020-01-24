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
	/**
	 * 
	 */
	 getHTMLString() {
		const { src } = this.getProps();
		if (src) {
			let charArr = src.split('');
			if (charArr.pop() === '/') {
				this.getHtmlFile(src + '/index.html');
				this.getFile(src + 'index.css', 'css');
				this.getFile(src + 'index.js', 'js');
			} else {
				this.getHtmlFile(src)
			}
		}
	}
	/**
	 * 
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
				this.writeHTML(html);
			})
		}).catch((err) => {
			console.err('Pretty-template error: ',err)
		});
	}
	/**
	 * 
	 * @param {String} src 
	 */
	getFile(src, type) {
		fetch(src, { method: 'get' })
		.then(res => {
			if (res.status !== 404) {
				res.text().then(text => {
					if (type === 'css') {
						const styles = document.createElement('style');
						styles.innerHTML = text;
						this.querySelector('.p-template-box').appendChild(styles)
					} else {
						eval(text)
					}
				})
			}
		})
		.catch((err) => {
			console.warn('Pretty-template:', type, src, err)
		})
	}
	/**
	 * 
	 * @param {String} html 
	 */
	writeHTML(html) {
		this.querySelector('.p-template-box').innerHTML = html;
		this.querySelectorAll('.p-template-box script').forEach(sc => {
			eval(sc.innerHTML);
		})
	}

	getProps() {
		return {
			src: this.getAttribute('src') !== null ? this.getAttribute('src') : undefined
		}
	}

	handleStoreEvents() {
		return {
		}
	}

}

window.customElements.define('pretty-template', Template);