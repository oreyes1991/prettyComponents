import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Card extends MetaComponent {
	constructor () {
		super ();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const { title, description, avatar } = this.getProps();
		const body = this.getBody();
		return `
			<div>
				${
					avatar !== ''
					? `<span class="p-avatar">
						${avatar}
					</span>`
					: ''
				}
				<div class="head">
					<h3>${title}</h3>
					<div class="description">${description}</div>
				</div>
				${
					body !== ''
					? `
					<div class="body">
						${body}
					</div>
					`
					: ''
				}
			</div>
		`
	}
	/**
	 * get the component body
	 */
	getBody() {
		const b = this.innerHTML.split('').map(ch => {
			if (ch !== '\n' && ch !== '\t' && ch !== '  ' && ch !== '   ' && ch !== '    ')
			{
				return ch;
			}
			return '';
		}).join('');
		this.innerHTML = '';
		return b.length > 3 ? b : '';
	}
	/**
	 * get properties
	 */
	getProps () {
		const title = this.getAttribute('title') !== null
			? this.getAttribute('title')
			: 'Title';
		const description = this.getAttribute('description') !== null
			? this.getAttribute('description')
			: '';
		const avatar = this.getAttribute('avatar') !== null
			? `<img src="${this.getAttribute('avatar')}">`
			: '';
		return {
			title, avatar, description
		}
	}
	/**
	 * add DOM listeners
	 */
	addListeners() {

	}
}

window.customElements.define('pretty-card', Card);