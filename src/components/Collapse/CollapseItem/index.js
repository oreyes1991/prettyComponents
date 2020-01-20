import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class CollapseItem extends MetaComponent {
	constructor() {
		super();
		this.body = this.getBody();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps ();
		return `
			<div class="collapse-item">
				<div class="collapse-header">
					<i class="fas fa-chevron-down"></i>
					<h3>${ props.title }</h3>
				</div>
				<div class="collapse-content">
					<div>
						${ this.body }
					</div>
				<div>
			</div>
		`
	}
	/**
	 * get component body
	 */
	getBody() {
		const b = this.innerHTML;
		this.innerHTML = '';
		console.log('clean the DOM')
		return b;
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

	validateStructure() {
		const children = this.children
		if (children.length > 1) {
			console.log(children)
			this.body = children.map((el, i) => {
				if (i !== 0) {
					return el.outerHTML
				}
				return ''
			}).join('')
			this.innerHTML = this.render();
		}
	}
	/**
	 * add DOM listeners
	 */
	addListeners() {
		setTimeout(() => {
			this.validateStructure();
		}, 1500)
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