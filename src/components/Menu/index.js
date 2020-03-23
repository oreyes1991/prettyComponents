import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody } from '../../util';
import './index.css';

class Menu extends MetaComponent {
	constructor() {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		this.body = getBody(this);
		const props = this.getProps();
		let bool = this.body.match(new RegExp('\"p-menu-box\"')) !== null
		console.log('menu render ==> ', bool, this.body.match(new RegExp('\"p-menu-box\"')) , this.body)
		return !bool ? `
			<div class="p-menu-box" style="top: ${props.offsetTop}px">
				<div class="p-mobile-only">
					<i class="fas fa-bars"></i>
				</div>
				${ this.body }
			</div>
		` : this.correctStructure(this.body);
	}
	/**
	 * Fix double rendering
	 * @param {*} body 
	 */
	correctStructure(body) {
		const props = this.getProps()
		const temp = document.createElement('div');
		temp.innerHTML = body;
		console.log('menu ==>', body)
		return `
		<div class="p-menu-box" style="top: ${props.offsetTop}px">
		<div class="p-mobile-only">
			<i class="fas fa-bars"></i>
		</div>
			${ tmp.children[1].outerHTML }
		</div>
		`
	}

	addListeners() {
		const toggler = this.querySelector('.p-mobile-only');
		toggler.addEventListener('click',() => {
			this.classList.toggle('p-mobile-toggled')
			if(this.classList.contains('p-mobile-toggled')) {
				toggler.innerHTML = `<i class="fas fa-times"></i>`
			} else {
				toggler.innerHTML = `<i class="fas fa-bars"></i>`
			}
		})
	}

	getProps() {
		return {
			offsetTop: this.getAttribute('offset-top') !== null ? this.getAttribute('offset-top') : 0,
			onChange: this.getAttribute('onchange') !== null ? this.getAttribute('onchange') : undefined
		}
	}

	toggleSelected() {
		const newSel = this.querySelector('.p-menu-item-box.selected.new');
		const prevSel = this.querySelector('.p-menu-item-box.selected:not(.new)');
		if (prevSel !== null) prevSel.classList.remove('selected');
		newSel.classList.remove('new');
	}


	handleStoreEvents() {
		return {
			'P_MENU_SELECTED': (action) => {
				const { onChange } = this.getProps();
				this.toggleSelected();
				if (onChange) {
					window[onChange](action.ev.item, action.ev.that)
				}
			}
		}
	}
}

window.customElements.define('pretty-menu', Menu)
