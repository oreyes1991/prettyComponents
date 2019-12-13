import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class InputButton extends MetaComponent {
	constructor() {
		super();
	}

	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps();
		return `
			<div class="input-number-body">
				<input value="${ props.min ? props.min : 0 }"></input>
				<div class="input-handler">
					<div>
						<i class="fas fa-angle-up"></i>
					</div>
					<div>
						<i class="fas fa-angle-down"></i>
					</div>
				</div>
			</div>
		`
	}

	getProps() {
		const { min, max } = this.getMinMax();
		return {
			min, max
		}
	}

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