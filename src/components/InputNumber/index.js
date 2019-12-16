import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class InputButton extends MetaComponent {
	constructor() {
		super();
		this.increment = this.increment.bind(this);
	}

	get value() {
		return this.val;
	}

	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps();
		this.val = props.min ? props.min : 0;
		return `
			<div class="input-number-body">
				<input value="${ this.val }"></input>
				<div class="input-handler">
					<div class="up">
						<i class="fas fa-angle-up"></i>
					</div>
					<div>
						<i class="fas fa-angle-down"></i>
					</div>
				</div>
			</div>
		`
	}
	/**
	 * add DOM listeners
	 */
	addListeners() {
		const { factor } = this.getProps();
		this.querySelector('input')
		.addEventListener('focus', () => {
			this.querySelector('.input-number-body').classList.add('focus')
		});
		this.querySelector('input')
		.addEventListener('focusout', () => {
			this.querySelector('.input-number-body').classList.remove('focus')
		});
		this.querySelectorAll('.input-handler > *').forEach(el => {
			el.addEventListener('click', () => {
				if (el.classList.contains('up')) {
					this.increment(factor);
				} else {
					this.increment(-factor);
				}
			})
		})
	}
	/**
	 *
	 * @param {Integer} factor 
	 */
	increment(factor) {
		this.val = this.checkMinMax(this.val + factor)
			? this.val + factor
			: this.val;
		this.querySelector('input').setAttribute('value', this.val);
	}
	/**
	 * 
	 */
	toggleDisable(el) {
		const disbled = this.querySelector('.input-handler > .disabled');
		if (disbled !== null) disbled.classList.remove('disabled');
		if (el) el.classList.add('disabled');
	}
	/**
	 * Check if n is in the Min/Max range
	 * @param {Number} n 
	 * @returns {Boolean} true/false
	 */
	checkMinMax(n) {
		const { min, max } = this.getProps();
		const handlers = this.querySelectorAll('.input-handler > *');
		let ret = true;
		if (min !== undefined) {
			ret = (n >= min)
			if (!ret) this.toggleDisable(handlers[1])
		}
		if (max !== undefined && ret) {
			ret = (n <= max)
			if (!ret) this.toggleDisable(handlers[0])
		}
		if(ret) this.toggleDisable();
		return ret;
	}
	/**
	 * get Properties or attributes
	 * @returns {Object} { min, max, factor }
	 */
	getProps() {
		const { min, max } = this.getMinMax();
		const factor = this.getFactor();
		return { min, max, factor }
	}
	/**
	 * get increment factor
	 * @returns {Number} default=1
	 */
	getFactor() {
		let factor = this.factor ? this.factor : this.getAttribute('factor');
		return factor !== null ? parseInt(factor) : 1;
	}
	/**
	 * get min/max properties or attribute
	 * @returns {Object} { min, max }
	 */
	getMinMax () {
		let res = {}; let arr = ['min', 'max'];
		arr.forEach(el=> {
			res[el] = this[el];
			res[el] = (!res[el] && this.getAttribute(el) !== null)
				? parseInt(this.getAttribute(el))
				: res[el];
		});
		return res;
	}
}

window.customElements.define('pretty-input-number', InputButton)