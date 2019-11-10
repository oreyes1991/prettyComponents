import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Spinner extends MetaComponent {
	/**
	 * add DOM listeners
	 */
	addListeners () {
	}
	/**
	 * MetaComponent constructor.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const type = this.getAttribute('type') !== null
					? this.getAttribute('type')
					: 'square'
		return type === 'square' 
		? `
		<div class="lds-grid">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		`
		:`
		<div class="lds-dual-ring"></div>
		`
	}
}

window.customElements.define('pretty-spinner', Spinner);
