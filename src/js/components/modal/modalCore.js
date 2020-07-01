import _ from 'lodash/core';

export default function ModalCore(options, callbackOnShow, callbackOnHidden) {
    const Elements = {};

    const actionWithModal = (operation, callback) => {
        // TODO: optimize it
        if (operation === 'show') {
            Elements._inside.modalBg.classList.add(Elements._inside.modalBgClassShow);
            Elements._inside.body.classList.add(Elements._inside.bodyClass);
            Elements.call.modal.classList.add(Elements.settings.modalShowClass)
        } 
        else if (operation === 'hidden') {
            Elements._inside.modalBg.classList.remove(Elements._inside.modalBgClassShow);
            Elements._inside.body.classList.remove(Elements._inside.bodyClass);
            Elements.call.modal.classList.remove(Elements.settings.modalShowClass)
        } 
        else {
            console.error(`action ${operation} is not supported for modal work`)
        }

        if (callback) callback()
    }

    const bindItems = (item, action) => {
        item.addEventListener('click', () => action())
    }

    Elements.call = {
        showButtons: document.querySelectorAll(options.showButtons),
        closeButtons: document.querySelectorAll(options.closeButtons),
        modal: document.querySelector(options.modal),
    };

    Elements.settings = {
        modalShowClass: options.modalShowClass,
        modalHiddenClass: options.modalHiddenClass,
    };

    Elements._inside = {
        modalBg: document.querySelector('.js-modal-bg'),
        modalBgClassShow: 'is-show',
        modalBgClassHidden: 'is-hidden',
        body: document.body,
        bodyClass: 'non-scrolled',
    }

    _.each(Elements.call.showButtons, (button) => bindItems(button, () => actionWithModal('show', callbackOnShow)));
    _.each(Elements.call.closeButtons, (button) => bindItems(button, () => actionWithModal('hidden', callbackOnHidden)));
}