import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/Button';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const btn = document.createElement('pretty-button');
		const container = document.createElement('div');
		const btn2 = document.createElement('pretty-button');
		const btn3 = document.createElement('pretty-button');
		const btn4 = document.createElement('pretty-button');
		btn.setAttribute('type' ,'default');
		btn.setAttribute('value', 'Default');
		btn2.setAttribute('type' ,'danger');
		btn2.setAttribute('value', 'Danger');
		btn3.setAttribute('type' ,'dashed');
		btn3.setAttribute('value', 'Dashed');
		btn4.setAttribute('type' ,'primary');
		btn4.setAttribute('value', 'Primary');
		container.append(btn, btn2, btn3, btn4);
		return container;
	}
}

window.customElements.define('main-container', MainContainer);
