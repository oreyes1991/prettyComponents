import { MetaComponent } from '@rebelstack-io/metaflux';
import flatpickr from "flatpickr";

class DatePicker extends MetaComponent {
	constructor() {
		super();
	}

	// eslint-disable-next-line class-method-use-this
	render() {
		const input = document.createElement('input')
		input.setAttribute('disabled','');
		flatpickr(input, {});
		return `
			<div class="p-date-picker-box">
				${input.outerHTML}
			</div>
		`
	}
}

window.customElements.define('pretty-date-picker', DatePicker);