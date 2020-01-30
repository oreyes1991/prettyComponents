import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';
import './index.css';

class Button extends MetaComponent {
	/**
	 * add DOM listeners
	 */
	addListeners () {
		const customCallback = this.props.onclick;
		if (customCallback) {
			this.addEventListener(
				'click',() => {
					window[customCallback](this)
				},
			);
		}
		if (this.props.href) {
			this.addEventListener('click', () => {
				if (this.props.target) {
					window.open(
						this.props.href,
						this.props.target
					);
				} else {
					window.open(this.props.href)
				}
			})
		}
	}
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.innerHTML = '';
		this.props = this.getProps();
		return `
			<button ${ this.props.id } type="button"> ${ this.props.value } </button>
		`;
	}

	getProps() {
		const value = this.getAttribute("value")
		const id = this.id ? ('id="' + this.id + '"') : '';
		this.removeAttribute('id');
		const href = this.getAttribute('href');
		const onClick = this.getAttribute('onclick');
		const target = this.getAttribute('target');
		return {
			value: value !== null ? value : 'value',
			id,
			href: href !== null ? href : false,
			onclick: onClick !== null ? onClick : false,
			target: target !== null ? target : false
		}
	}

	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			
		};
	}
}

window.customElements.define('pretty-button', Button);
