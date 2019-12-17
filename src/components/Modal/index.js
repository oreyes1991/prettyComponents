import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Modal extends MetaComponent {
	constructor() {
		super();
	}
	addListeners() {
		this.querySelector('.modal-title > .modal-close')
		.addEventListener('click', () => {
			this.close();
		});
		this.querySelector('.modal-box').addEventListener('click', (e) => {
			try {
				if (e.target.classList.contains('modal-box')) {
					this.close();
				}
			} catch (error) {
				
			}
		})
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const { body, title } = this.getProps();
		return `
			<div class="modal-box">
				<div class="modal-wrapper">
					<div class="modal-title">
						<h3>${ title }</h3>
						<div class="modal-close">
							<i class="fas fa-times"></i>
						</div>
					</div>
					<div class="modal-body">
						${ body.outerHTML }
					</div>
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
		const body = this.querySelector('*:not(pretty-modal-footer)');
		const footer = this.querySelector('pretty-modal-foter');
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
		return { body, footer, title}
	}
}

window.customElements.define('pretty-modal', Modal);