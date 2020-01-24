import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody } from '../../util';
import './index.css';

class Collapse extends MetaComponent {
	constructor() {
		super();
		this.body = getBody(this);
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		return `
			<div class="collapse-body">
				${this.body}
			</div>
		`
	}

}

window.customElements.define('pretty-collapse', Collapse)