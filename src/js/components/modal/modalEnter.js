import ModalConfig from './modalConfig';
import _ from 'lodash/core';

export default function ModalEnter () {
    const Elements = {
        modals: {
            menu: document.querySelector('.js-menu'),
            videoModal: document.querySelector('.js-modal-video'),
            requestModal: document.querySelector('.js-modal-request'),
            sidebarMain: document.querySelector('.js-sidebar'),
            modalBg: document.querySelector('.js-modal-bg'),
            successModal: document.querySelector('.js-success'),

        },
        menu: {
            header: document.querySelector('.js-header'),
            menuToggle: document.querySelector('.js-burger'),
        },
        video: {
            videoShow: document.querySelectorAll('.js-show-video'),
            videoClose: document.querySelector('.js-close-video'),
            videoFrame: document.querySelector('.js-video')
        }, 
        request: {
            requestShow: document.querySelector('.js-show-request'),
            requestClose: document.querySelector('.js-close-request')
        },
        sidebar: {
            sidebarShow: document.querySelectorAll('.js-show-sidebar'),
            sidebarClose: document.querySelector('.js-close-sidebar')
        },
        success: {
            successClose: document.querySelector('.js-close-success'),
        }
    }

    const menuCallback = () => {
        Elements.menu.menuToggle.classList.toggle('is-show')
        Elements.menu.header.classList.toggle('is-important')
    }

    const bgClose = (modalsObj) => {
        _.each(modalsObj, (modal) => {
            if (modal.classList.contains('is-show'))  modal.classList.remove('is-show')
        })
        document.body.classList.remove('is-non-scrolled');

        if (Elements.menu.menuToggle.classList.contains('is-show')) {
            menuCallback()
        }
    }

    const MenuModal = new ModalConfig({
        modal: Elements.modals.menu,
        show: Elements.menu.menuToggle,
        close: Elements.modals.menu
    }, menuCallback, menuCallback)

    const VideoModal = new ModalConfig({
        modal: Elements.modals.videoModal,
        show: Elements.video.videoShow,
        close: Elements.video.videoClose
    }, () => {
        Elements.video.videoFrame.src = 'https://www.youtube.com/embed/NqowVWu_4f0';
    }, () => {
        Elements.video.videoFrame.src = '';
    })

    const RequestModal = new ModalConfig({
        modal: Elements.modals.requestModal,
        show: Elements.request.requestShow,
        close: Elements.request.requestClose
    })

    const successModal = new ModalConfig({
        modal: Elements.modals.successModal,
        show: '',
        close: Elements.success.successClose
    })

    const sidebar = new ModalConfig({
        modal: Elements.modals.sidebarMain,
        show: Elements.sidebar.sidebarShow,
        close: Elements.sidebar.sidebarClose
    })

    Elements.modals.modalBg.addEventListener('click', () => bgClose(Elements.modals))
}