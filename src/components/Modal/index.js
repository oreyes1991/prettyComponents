import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Modal extends MetaComponent {
	constructor() {
		super();
	}
	/**
	 * add DOM listener
	 */
	addListeners() {
		const headerClose = this.querySelector('.modal-title > .modal-close');
		const cancelBtn = this.querySelector('#cancel');
		const submitBtn = this.querySelector('#submit');
		if (headerClose !== null){
			headerClose.addEventListener('click', () => {
				this.close();
			});
		}
		this.querySelector('.modal-box').addEventListener('click', (e) => {
			try {
				if (e.target.classList.contains('modal-box')) {
					this.close();
				}
			} catch (error) {
				
			}
		});
		if (cancelBtn !== null) {
			cancelBtn.addEventListener('click', () => {
				this.close()
			})
		}
		if (submitBtn !== null) {
			submitBtn.addEventListener('click', () => {
				//TODO: custom submit callback
			})
		}
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const { body, title, footer, footless, headless } = this.getProps();
		return `
			<div class="modal-box">
				<div class="modal-wrapper">
					${
						headless ? '' : `
						<div class="modal-title">
							<h3>${ title }</h3>
							<div class="modal-close">
								<i class="fas fa-times"></i>
							</div>
						</div>
						`
					}
					<div class="modal-body">
						${ body.outerHTML }
					</div>
					${ footless ? '' : footer.outerHTML}
				</div>
			</div>
		`
	}
	/**
	 * Close handler
	 */
	close() {
		this.removeAttribute('visible');
	}
	/**
	 * Open handler
	 */
	open() {
		this.setAttribute('visible', '');
	}
	/**
	 * Get component children elements
	 * @returns {Object} {footer, body}
	 */
	getChildrens() {
		const body = this.querySelector('*:not(.modal-footer)');
		const footer = this.querySelector('.modal-footer') !== null
			? this.querySelector('.modal-footer')
			: this.getDefaultFooter();
		this.innerHTML = '';
		return { footer, body }
	}
	/**
	 * get Propperties || attributes
	 * @returns {Object} {body,footer,title}
	 */
	getProps() {
		const { body, footer } = this.getChildrens();
		let title = this.title ? this.title : '';
		title = (!title && this.getAttribute('title') !== null)
			? this.getAttribute('title')
			: title;
		let footless = (this.footless || this.getAttribute('footless') !== null);
		let headless = (this.headless || this.getAttribute('headless') !== null);
		return { body, footer, title, footless, headless}
	}
	/**
	 * get the default footer if not provided
	 */
	getDefaultFooter() {
		const footer = document.createElement('div');
		footer.className = 'modal-footer';
		footer.innerHTML = `<pretty-button value="Cancel" id="cancel"></pretty-button>
			<pretty-button type="primary" value="Ok" id="submit"></pretty-button>
		`;
		return footer;
	}
}

window.customElements.define('pretty-modal', Modal);