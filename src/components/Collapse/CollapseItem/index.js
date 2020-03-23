import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody } from '../../../util';
import './index.css';

class CollapseItem extends MetaComponent {
	constructor() {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps ();
		this.body = getBody(this);
		let bool = this.body.match(new RegExp('\"collapse-item\"')) !== null
		return !bool
			? this.getHTMLText(props.title, this.body)
			: this.correctStructure(this.body);
	}
	/**
	 * get Layout
	 */
	getHTMLText(title, body) {
		return `<div class="collapse-item">
		<div class="collapse-header">
			<i class="fas fa-chevron-down"></i>
			<h3>${ title }</h3>
		</div>
		<div class="collapse-content">
			<div>
				${ body }
			</div>
		<div>
		</div>`
	}
	/**
	 * 
	 * @param {HTMLElement} body 
	 */
	correctStructure(body) {
		const props = this.getProps ();
		const tmp = document.createElement('div');
		tmp.innerHTML = body;
		return this.getHTMLText(props.title, tmp.children[1].outerHTML)
	}
	/**
	 * get component properties
	 */
	getProps() {
		const title = this.getAttribute('title') !== null
			? this.getAttribute('title')
			: 'Title';
		const expanded = this.getAttribute('expanded') !== null;
		return {
			title, expanded
		}
	}

	/**
	 * add DOM listeners
	 */
	addListeners() {
		this.querySelector('.collapse-header').addEventListener('click', () => {
			if (this.getProps().expanded) {
				this.removeAttribute("expanded");
			} else {
				this.setAttribute('expanded','');
			}
		})
	}
}

window.customElements.define('pretty-collapse-item', CollapseItem)