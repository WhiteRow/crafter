import ModalCore from './modalCore';

export default function VideoModal() {
    
    const loadVideo = () => {
        const videoFrame = document.querySelector('.js-video');
        if (!videoFrame.src) videoFrame.src = "https://www.youtube.com/embed/rYc_wtSV-Wc";
    }

    const showModalVide = new ModalCore({
        showButtons: '.js-show-modal-video',
        closeButtons: '.js-close-modal-video',
        modal: '.js-modal-video',
        modalShowClass: 'is-show',
    }, loadVideo)
}

    