import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Template extends MetaComponent {
	constructor() {
		super(global.storage);
		this.props = this.getProps();
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
					this.props = this.getProps();
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
		if (this.props.src) {
			let charArr = this.props.src.split('');
			if (charArr.pop() === '/') {
				if (!this.props.styleless) {
					this.getFile(this.props.src + 'index.css', 'css');
				}
				this.getHtmlFile(this.props.src + '/index.html');
			} else {
				this.getHtmlFile(this.props.src)
			}
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
				this.writeHTML(html);
				this.storage.dispatch({ type: 'P-TEMPLATE-HTML-LOADED', that: this })
			})
		}).catch((err) => {
			console.err('Pretty-template error: ',err)
		});
	}
	/**
	 * Fetch file (css or js)
	 * @param {String} src 
	 */
	getFile(src, type) {
		fetch(src, { method: 'get' })
		.then(res => {
			if (res.status !== 404) {
				res.text().then(text => {
					if (type === 'css') {
						const styles = document.createElement('style');
						styles.setAttribute('p-src', src)
						styles.innerHTML = text;
						this.injectStyles(styles, src);
					} else {
						this.injectScript(src);
					}
				})
			}
		})
		.catch((err) => {
			console.warn('Pretty-template:', type, src, err)
		})
	}
	/**
	 * inject script tag at the end of the document
	 */
	injectScript(src) {
		const tag = document.querySelector(`script[src="${src}"]`);
		if(tag === null) {
			const sctTag = document.createElement('script');
			sctTag.setAttribute('src', src);
			document.body.appendChild(sctTag);
		}
	}
	/**
	 * inject each view styles, once
	 * @param {HTMLElement} styles 
	 * @param {String} src 
	 */
	injectStyles(styles, src) {
		if (document.querySelector(`style[p-src="${src}"`) !== null) {
			document.querySelector(`style[p-src="${src}"`).innerHTML = styles.innerHTML;
		} else {
			document.body.appendChild(styles);
		}
	}
	/**
	 * 
	 * @param {String} html 
	 */
	writeHTML(html) {
		this.querySelector('.p-template-box').innerHTML = html;
		if (!this.props.scriptless) {
			this.querySelectorAll('.p-template-box script').forEach(sc => {
				eval(sc.innerHTML);
			})
		}
		if (this.props.styleless) {
			this.querySelectorAll('.p-template-box style').forEach(st => {
				st.innerHTML = '';
			})
		}
	}
	/**
	 * get attritbutes
	 * @returns {*} {src: String, scriptless: Boolean, styleless: Boolean}
	 */
	getProps() {
		return {
			src: this.getAttribute('src') !== null ? this.getAttribute('src') : undefined,
			scriptless: this.getAttribute('scriptless') !== null,
			styleless: this.getAttribute('styleless') !== null
		}
	}

	handleStoreEvents() {
		return {
			'P-TEMPLATE-HTML-LOADED': (action) => {
				const { that } = action;
				const { src, scriptless } = that.getProps();
				if (!scriptless) {
					that.getFile(src + 'index.js', 'js');
				}
			}
		}
	}

}

window.customElements.define('pretty-template', Template);