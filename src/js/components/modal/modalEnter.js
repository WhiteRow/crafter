import ModalConfig from './modalConfig';
import _ from 'lodash/core';

export default function ModalEnter () {
    const Elements = {
        modals: {
            menu: document.querySelector('.js-menu'),
            videoModal: document.querySelector('.js-modal-video'),
            sidebarMain: document.querySelector('.js-sidebar'),
            modalBg: document.querySelector('.js-modal-bg'),

        },
        menu: {
            header: document.querySelector('.js-header'),
            menuShow: document.querySelector('.js-burger'),
        },
        video: {
            videoShow: document.querySelectorAll('.js-show-video'),
            videoFrame: document.querySelector('.js-video')
        }, 
        sidebar: {
            sidebarShow: document.querySelectorAll('.js-show-sidebar'),
        }
    }

    const menuCallback = () => {
        Elements.menu.menuShow.classList.toggle('is-show')
        Elements.menu.header.classList.toggle('is-important')
    }

    const bgClose = (modalsObj) => {
        _.each(modalsObj, (modal) => {
            if (modal.classList.contains('is-show'))  modal.classList.remove('is-show')
        })
        document.body.classList.remove('is-non-scrolled');

        if (Elements.menu.menuShow.classList.contains('is-show')) {
            menuCallback()
        }
    }

    const MenuModal = new ModalConfig({
        modal: Elements.modals.menu,
        show: Elements.menu.menuShow,
    }, menuCallback, menuCallback)

    const VideoModal = new ModalConfig({
        modal: Elements.modals.videoModal,
        show: Elements.video.videoShow,
    }, () => {
        Elements.video.videoFrame.src = 'https://www.youtube.com/embed/NqowVWu_4f0';
    }, () => {
        Elements.video.videoFrame.src = '';
    })

    const sidebar = new ModalConfig({
        modal: Elements.modals.sidebarMain,
        show: Elements.sidebar.sidebarShow
    })

    Elements.modals.modalBg.addEventListener('click', () => bgClose(Elements.modals))
}