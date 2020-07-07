import lozad from 'lozad';

export default function Lazyload() {
    const images = document.querySelectorAll('.image');
    const observer = lozad(images, {
        loaded: (image) => {
            image.classList.add('loaded')     
        }
    });

    observer.observe()
}