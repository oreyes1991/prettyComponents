import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody } from '../../../util';
import './index.css';

class MenuItem extends MetaComponent {
	constructor() {
		super();
	}

	set selected(bool) {
		if(bool) {
			this.setAttribute('selected', '');
		} else {
			this.removeAttribute('selected');
		}
	}

	// eslint-disable-next-line class-method-use-this
	render() {
		this.body = getBody(this);
		const props = this.getProps();
		let bool = this.body.match(new RegExp('\"p-menu-item-box\"')) !== null
		return !bool ? `
			<div class="p-menu-item-box${props.selected ? ' selected': ''}">
				${ props.icon ? `<i class="${props.icon}"></i>` : '<svg></svg>' }
				${ this.body }
			</div>
		` : this.correctStructure(this.body);
	}
	/**
	 * Fix Double Rendering
	 * @param {String} body 
	 */
	correctStructure(body) {
		console.log('menu item corrected ==>', body)
		const tmp = document.createElement('div');
		const props = this.getProps();
		tmp.innerHTML = body;
		this.innerHTML = '';
		return `
		<div class="p-menu-item-box${props.selected ? ' selected': ''}">
			${ props.icon ? `<i class="${props.icon}"></i>` : '<svg></svg>' }
			${ tmp.querySelector('.p-menu-item-box > *:not(svg)').outerHTML }
		</div>
		`
	}

	addListeners() {
		const item = this.querySelector('.p-menu-item-box');
		const { action, actionData, href } = this.getProps();
		item.addEventListener('click', () => {
			item.classList.add('selected', 'new');
			global.storage.dispatch({ type: 'P_MENU_SELECTED', ev: {item: item.querySelector('svg + *'), that: this} })
			if (action) {
				global.storage.dispatch({ type: action, data: actionData})
			}
			if (href) {
				document.location.href = href;
			}
		})
	}

	getProps() {
		const selected = this.getAttribute('selected') !== null;
		this.removeAttribute('selected');
		return {
			icon: this.getAttribute('icon') !== null ? this.getAttribute('icon') : '',
			action: this.getAttribute('action') !== null ? this.getAttribute('action') : undefined,
			actionData: this.getAttribute('action-data') !== null ? this.getAttribute('action-data') : undefined,
			href: this.getAttribute('href') !== null ?  this.getAttribute('href') : undefined,
			selected
		}
	}
}

window.customElements.define('pretty-menu-item', MenuItem);