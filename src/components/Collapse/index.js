import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Collapse extends MetaComponent {
	constructor() {
		super();
		this.body = this.getBody();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		return `
			<div class="collapse-body">
				${this.body}
			</div>
		`
	}
	/**
	 * get component body
	 */
	getBody() {
		const b = this.innerHTML;
		this.innerHTML = '';
		return b;
	}
}

window.customElements.define('pretty-collapse', Collapse)