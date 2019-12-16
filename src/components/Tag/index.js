import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Tag extends MetaComponent {
	constructor() {
		super()
	}
	get name () {
		return this.getProps().value;
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps();
		return `
			<div>
				${props.icon}
				<span>${props.value}</span>
				${props.isCloseable
				? '<div class="close"><i class="fas fa-times-circle"></i></div>'
				: ''}
				${props.loading
					? '<pretty-spinner type="circular"></pretty-spinner>'
					: ''
				}
			</div>
		`
	}
	/**
	 * get attributes or properties
	 */
	getProps() {
		let value = this.getAttribute('value') !== null
			? this.getAttribute('value')
			: 'Tag';
		value = this.value ? this.value : value;
		let isCloseable = this.getAttribute('close') !== null || this.isCloseable;
		let icon = this.getAttribute('icon') !== null
			? this.getAttribute('icon')
			: '';
		icon = this.icon ? this.icon : icon;
		icon = icon !== ''
			? `<i class="${icon} custom-icon"></i>`
			: icon;
		let closeCallback = this.getAttribute('onclose') !== null
			? this.getAttribute('onclose')
			: '';
		closeCallback = this.onClose ? this.onClose : closeCallback;
		let loading = this.getAttribute('loading') !== null || this.loading;
		let selectable = this.getAttribute('selectable') !== null || this.selectable;
		let selectCallback = this.getAttribute('onselect') !== null
			? this.getAttribute('onselect')
			: '';
		selectCallback = this.onSelect ? this.onSelect : selectCallback;
		return {
			value,
			isCloseable,
			icon,
			closeCallback,
			loading,
			selectable,
			selectCallback
		}
	}
	/**
	 * add DOM listeners
	 */
	addListeners() {
		const props = this.getProps();
		if (props.isCloseable && props.closeCallback) {
			if (typeof props.closeCallback === 'string') {
				this.closeListerner(window[props.closeCallback])
			} else {
				this.closeListerner(props.closeCallback);
			}
		}
		if (props.selectable) {
			this.selectListener(props.selectCallback);
		}
		var observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					this.innerHTML = this.render();
				}
			});
		});
		
		observer.observe(this, {
			attributes: true //configure it to listen to attribute changes
		});
	}
	/**
	 * 
	 * @param {CallableFunction} callback 
	 */
	selectListener(callback) {
		try {
			this.addEventListener('click', (e) => {
				this.classList.toggle('selected');
				if (typeof callback === 'string') {
					if (callback !== '') window[callback](this.classList.contains('selected'), this, e)
				} else {
					callback(this.classList.contains('selected'), this, e);
				}
			})
		}catch(err) {
			//
		}
	}
	/**
	 * close action listener
	 * @param {CallableFunction} callback 
	 */
	closeListerner(callback) {
		try {
			const btn = this.querySelector('.close');
			btn.addEventListener('click', (e) => {
				callback(this.querySelector('.close'), this, e);
			})
		} catch (err){
			console.error('Pretty-tag error: ', err);
		}
	}
}

window.customElements.define('pretty-tag', Tag);