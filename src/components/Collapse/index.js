import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Collapse extends MetaComponent {
	constructor() {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		return `
			<div class="collapse-body">
				${this.getBoddy()}
			</div>
		`
	}
	/**
	 * get component body
	 */
	getBoddy() {
		const b = this.innerHTML;
		this.innerHTML = '';
		return b;
	}
}

window.customElements.define('pretty-collapse', Collapse)