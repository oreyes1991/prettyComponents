import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class MenuItem extends MetaComponent {
    constructor() {
        super();
    }
    // eslint-disable-next-line class-method-use-this
    render() {
        const props = this.getProps();
        return `
            <div class="p-menu-item-box">
                ${ props.icon ? `<i class="${props.icon}"></i>` : '<svg></svg>' }
                ${ this.getBody() }
            </div>
        `
    }

    addListeners() {
        const item = this.querySelector('.p-menu-item-box');
        const { action, actionData, href } = this.getProps();
        item.addEventListener('click', () => {
            item.classList.add('selected', 'new');
            global.storage.dispatch({ type: 'P_MENU_SELECTED', ev: {item: item.querySelector('svg + *'), that: this} })
            if (action) {
                global.storage.dispatch({ type: action, data: actionData})
            }
            if (href) {
                document.location.href = href;
            }
        })
    }

    getProps() {
        return {
            icon: this.getAttribute('icon') !== null ? this.getAttribute('icon') : '',
            action: this.getAttribute('action') !== null ? this.getAttribute('action') : undefined,
            actionData: this.getAttribute('action-data') !== null ? this.getAttribute('action-data') : undefined,
            href: this.getAttribute('href') !== null ?  this.getAttribute('href') : undefined
        }
    }

    getBody() {
        const b = this.innerHTML;
        this.innerHTML = '';
        return b;
    }
}

window.customElements.define('pretty-menu-item', MenuItem);