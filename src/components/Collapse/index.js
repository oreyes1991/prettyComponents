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

	validateStructure() {
		const children = this.children
		if (children.length > 1) {
			console.log(children)
			let child = '';
			for(let i=0; i < children.length; i++) {
				if (i !== 0) {
					child += children[i].outerHTML
				}
			}
			this.body = child;
			this.innerHTML = this.render();
		}
	}

	/**
	 * get component body
	 */
	getBody() {
		const b = this.innerHTML;
		this.innerHTML = '';
		return b;
	}

	addListeners() {
		setTimeout(() => {
			this.validateStructure();
		}, 1500)
	}
}

window.customElements.define('pretty-collapse', Collapse)