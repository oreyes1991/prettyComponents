import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';
import './index.css';

class Button extends MetaComponent {
	/**
	 * add DOM listeners
	 */
	addListeners () {
		const customCallback = this.getAttribute('onclick');
		if (customCallback !== null) {
			this.addEventListener(
				'click',
				window[customCallback]
			);
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
		const value = this.getAttribute("value") !== null
			? this.getAttribute("value")
			: 'value';
		return `
			<button type="button"> ${ value } </button>
		`;
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
