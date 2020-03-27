import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody, getProps } from '../../../util';
import './index.css';

class MenuGroup extends MetaComponent {
	constructor() {
		super(global.storage);
	}

	render() {
		this.body = getBody(this);
		this.props = getProps(this);
		return `
			<div class="p-menu-group-box${this.props.selected ? ' selected' : ''}">
				${this.props.icon ? `<i class=${this.props.icon}></i>` : '<svg></svg>'}
				<div class="p-menu-group-title"> ${ this.props.title }</div>
				<div class="p-menu-group-items ${!this.props.selected ? 'p-hidden' : ''}">
					${ this.body }
				</div>
			</div>
		`
	}

	addListeners() {
		const item = this.querySelector('.p-menu-group-box');
		item.addEventListener('click', () => {
			item.classList.add('selected', 'new');
			global.storage.dispatch({ type: 'P_MENU_SELECTED', ev: {item: item.querySelector('svg + *'), that: this} })
		});
		let subItems = item.querySelectorAll('.p-menu-group-items > *');
		for(let i=0; i < subItems.length; i++) {
			const sub = subItems[i];
			sub.addEventListener('click', () => {
				sub.selected = true;
			})
		}
		var observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					this.showItems()
				}
			});
		});
		observer.observe(this, {
			attributes: true //configure it to listen to attribute changes
		});
	}

	showItems() {
		const props = getProps(this);
		if(props.selected) {
			this.querySelector('.p-menu-group-items').classList.remove('p-hidden');
		} else {
			this.querySelector('.p-menu-group-items').classList.add('p-hidden');
		}
	}

	handleStoreEvents() {
		return {

		}
	}
}

window.customElements.define('pretty-menu-group', MenuGroup);