import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';
import './index.css';

const DEFAULT_PASS_ICON = "far fa-eye-slash"
const TOGGLED_PASS_ICON = "far fa-eye";

class Input extends MetaComponent {
	/**
	 * add DOM listeners
	 */
	addListeners () {
		this.querySelector('input')
		.addEventListener('focus', () => {
			this.querySelector('div').classList.add('focus')
		});
		this.querySelector('input')
		.addEventListener('focusout', () => {
			this.querySelector('div').classList.remove('focus')
		});
		this.addShowListener();
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
	
	get value() {
		return this.querySelector('input').value;
	}
	/**
	 * 
	 */
	addShowListener() {
		try {
			this.querySelector('i.show').addEventListener('click', () => {
				this.showPassword(this.querySelector('i.show'));
			})
		} catch (error) {
			//
		}
	}
	/**
	 * toggle icon and input type
	 */
	showPassword(i) {
		const input = this.querySelector('input');
		if (i.classList.contains('fa-eye-slash')) {
			i.className = TOGGLED_PASS_ICON + ' show';
			input.setAttribute('type', 'text');
		} else {
			i.className = DEFAULT_PASS_ICON + ' show';
			input.setAttribute('type', 'password');
		}
	}
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const isPass = this.getAttribute('password') !== null
			? this.getAttribute('password')
			: false;
		const isLoading = this.getAttribute('loading') !== null;
		const placeHolder = this.getAttribute('placeholder');
		return `
			<div>
				<input type="${isPass ? 'password' : 'text'}"
				placeholder="${placeHolder !== null ? placeHolder : ''}"
				>
				${
					isPass === 'show'
					? '<i class="'+ DEFAULT_PASS_ICON +' show"></i>'
					: ''
				}
				${
					isLoading
					? '<pretty-spinner type="circular"></pretty-spinner>'
					: ''
				}
			</div>
		`
	}

}

window.customElements.define('pretty-input', Input);
