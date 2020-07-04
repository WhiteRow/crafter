import _ from 'lodash/core';

export default function ModalConfig (options, showCallback, closeCallback) {
    let Privates = {};

    // класс is-show это константа, ее выводить в options не стал, так же как и класс is-non-scrolled
    this.modalToggle = (callback) => {
        Privates._inside.modalBg.classList.toggle('is-show');
        Privates.call.modal.classList.toggle('is-show');
        document.body.classList.toggle('is-non-scrolled')
        
        if (callback) callback()
    }

    this.addEvent = (callback, ...items) => {
        _.each(items, (item) => {
            if (item.length !== undefined) {
                _.each(item, (itemOfItem) => itemOfItem.addEventListener('click', callback))
            } else {
                item.addEventListener('click', callback)
            }
        })        
    }

    this.bindItems = () => {
        const showEvent = this.addEvent(() => this.modalToggle(showCallback), Privates.call.show);
        const closeEvent = this.addEvent(() => this.modalToggle(closeCallback), Privates.call.modal);
    }
 
    Privates = options;
    Privates.call = {
        modal: Privates.modal,
        show: Privates.show,
        close: Privates.close,
    }

    Privates._inside = {
        modalBg: document.querySelector('.js-modal-bg')
    }

    this.bindItems()
}