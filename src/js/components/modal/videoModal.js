import ModalCore from './modalCore';

export default function VideoModal() {
    
    const loadVideo = () => {
        document.querySelector('.js-video').src = "https://www.youtube.com/embed/rYc_wtSV-Wc";
    }

    const showModalVide = new ModalCore({
        showButtons: '.js-toggle-modal-video',
        modal: '.js-modal-video',
        modalShowClass: 'is-show'
    }, loadVideo)
}

