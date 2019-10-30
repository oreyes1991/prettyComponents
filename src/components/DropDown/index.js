import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class DropDown extends MetaComponent {
	/**
	 * MetaComponent constructor
	 */
	constructor () {
		super();
	}
	/**
	 * add DOM listeners
	 */
	addListeners () {
		const target = document.querySelector("#" + this.getAttribute('target'));
		const changeFunct = this.getAttribute('onchange');
		if (target !== null) {
			target.addEventListener('mouseenter', () => {
				this.classList.remove('p-hidden')
				this.style.minWidth = target.offsetWidth + 'px';
			});
			target.addEventListener('mouseleave', (e) => {
				if(!e.toElement.className.startsWith('p-menu')) {
					this.classList.add('p-hidden')
				}else {
					this.addEventListener('mouseleave', (ev) => {
						if (ev.toElement.id !== this.getAttribute('target')) {
							this.classList.add('p-hidden')
						}
					})
				}
			});
		}
		if (changeFunct !== null) {
			//window[customCallback]
			document.querySelectorAll('pretty-dropdown > *')
			.forEach(el => {
				if (!el.classList.contains('p-menu-divider') &&
					el.getAttribute('disabled') === null
				) {
					el.addEventListener('click', () => {
						window[changeFunct](el);
					})
				}
			})
		}
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.classList.add('p-hidden');
		return ``;
	}

}

window.customElements.define('pretty-dropdown', DropDown);
