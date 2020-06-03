import _ from 'lodash/core';

export default function ModalCore (options, callback) {
    const Elements = {};

    const toggleModal = () => {
        if (Elements._inside.modalBg.classList.contains(Elements._inside.modalBgClassShow)) {
            Elements._inside.modalBg.classList.add(Elements._inside.modalBgClassHidden)
        } else {
            Elements._inside.modalBg.classList.remove(Elements._inside.modalBgClassHidden) 
        } 

        Elements.call.modal.classList.toggle(Elements.settings.modalShowClass);
        Elements._inside.modalBg.classList.toggle(Elements._inside.modalBgClassShow);
        Elements._inside.body.classList.toggle(Elements._inside.bodyClass);
    }

    const bindItems = (item) => {
        item.addEventListener('click', () => {
            toggleModal();
            if (callback) callback()
        })
    }

    Elements.call = {
        showButtons: document.querySelectorAll(options.showButtons),
        modal: document.querySelector(options.modal),
    };

    Elements.settings = {
        modalShowClass: options.modalShowClass,
    };

    Elements._inside = {
        modalBg: document.querySelector('.js-modal-bg'),
        modalBgClassShow: 'is-show',
        modalBgClassHidden: 'is-hidden',
        body: document.body,
        bodyClass: 'non-scrolled',
        elementsToHandle: {},
    }

    _.each(Elements.call.showButtons, (button) => bindItems(button));
}