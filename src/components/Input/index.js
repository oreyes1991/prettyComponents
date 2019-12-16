import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../handlers';
import './index.css';

const DEFAULT_PASS_ICON = "fa-eye-slash"
const TOGGLED_PASS_ICON = "fa-eye";

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
			this.querySelector('.show').addEventListener('click', () => {
				this.showPassword(this.querySelector('.show > svg'));
			})
		} catch (error) {
			//
		}
	}
	/**
	 * svg-inline--fa fa-eye-slash fa-w-20
	 * toggle icon and input type
	 */
	showPassword(i) {
		const input = this.querySelector('input');
		if (i.classList.contains('fa-eye-slash')) {
			i.classList.remove('fa-eye-slash')
			i.classList.add('far',TOGGLED_PASS_ICON);
			input.setAttribute('type', 'text');
		} else {
			i.classList.remove('fa-eye-slash')
			i.classList.add('far',DEFAULT_PASS_ICON);
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
					? `<div class="show">
						<i class="far ${DEFAULT_PASS_ICON}"></i>
						<div>`
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
