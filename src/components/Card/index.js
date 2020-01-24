import { MetaComponent } from '@rebelstack-io/metaflux';
import { getBody } from '../../util';
import './index.css';

class Card extends MetaComponent {
	constructor () {
		super ();
		this.body = getBody(this, true);
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const { title, description, avatar } = this.getProps();
		
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
					this.body !== ''
					? `
					<div class="body">
						${this.body}
					</div>
					`
					: ''
				}
			</div>
		`
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
}

window.customElements.define('pretty-card', Card);