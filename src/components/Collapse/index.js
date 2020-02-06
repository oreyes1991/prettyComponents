import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody } from '../../util';
import './index.css';

class Collapse extends MetaComponent {
	constructor() {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		this.body = getBody(this);
		let bool = this.body.match(new RegExp('\"collapse-body\"')) !== null
		return !bool ? `
			<div class="collapse-body">
				${this.body}
			</div>
		` : this.correctStructure(this.body);
	}
	
	correctStructure(body) {
		const tmp = document.createElement('div');
		tmp.innerHTML = body;
		return `
		<div class="collapse-body">
			${tmp.children[1].outerHTML}
		</div>
		`
	}

}

window.customElements.define('pretty-collapse', Collapse)