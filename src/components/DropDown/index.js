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
			this.targetListener(target);
		}
		if (changeFunct !== null) {
			for (let i=0; i < this.children.length; i++) {
				const el = this.children.item(i);
				if (!el.classList.contains('p-menu-divider') &&
					el.getAttribute('disabled') === null
				) {
					el.addEventListener('click', () => {
						window[changeFunct](el, target, this);
						this.classList.toggle('p-hidden');
					})
				}
			}
		}
	}
	/**
	 * Mouse enter / leave listeners
	 * @param {HTMLElement} target 
	 */
	targetListener(target) {
		target.addEventListener('mouseenter', () => {
			this.classList.remove('p-hidden')
			this.style.minWidth = target.offsetWidth + 'px';
			this.setPosition(target)
		});
		target.addEventListener('mouseleave', (e) => {
			if(!e.toElement.className.startsWith('p-menu')) {
				this.classList.add('p-hidden')
			}else {
				this.addEventListener('mouseleave', (ev) => {
					if (ev.toElement === null || ev.toElement.id !== this.getAttribute('target')) {
						this.classList.add('p-hidden')
					}
				})
			}
		});
	}
	/**
	 * set the the position to target's placement 
	 * @param {Event} ev 
	 */
	setPosition(target) {
		const xFactor = this.calcXFactor(target);
		const yFactor = this.calcYFactor(target);
		this.style.left = (target.offsetLeft + xFactor) + 'px';
		this.style.top = (target.offsetHeight + target.offsetTop + yFactor) + 'px';
	}
	/**
	 * calc offset X in px
	 */
	calcXFactor(target) {
		switch(this.getXPlacement()) {
			case 'left':
				return (target.offsetWidth - 5) * -1;
			case 'right':
				return (target.offsetWidth - 5);
			default:
				return 0;
		}
	}
	/**
	 * calc offset Y in px
	 */
	calcYFactor(target) {
		if (this.getYPlacement() !== 'bottom') {
			return -target.offsetHeight - this.offsetHeight;
		}
		return 0;
	}
	/**
	 * get x placement (Attribute)
	 */
	getXPlacement () {
		if (this.getAttribute('placement') === null) return 'center';
		return this.getAttribute('placement').split('-')[1];
	}
	/**
	 * get y placement (Attributte)
	 */
	getYPlacement () {
		if (this.getAttribute('placement') === null) return 'bottom';
		return this.getAttribute('placement').split('-')[0];
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.classList.add('p-hidden');
		return ``;
	}

}

window.customElements.define('pretty-dropdown', DropDown);
