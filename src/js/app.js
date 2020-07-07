import "../styles/app.sass";
import './config/images-import.js'

import Lazyload from './components/lazyload';
import Scrolling from './components/scrolling';
import Slider from './components/slider';
import ModalEnter from './components/modal/modalEnter';
import SidebarEnter from './components/sidebar/sidebarEnter';
import formHandler from './components/formHandler';

function App() {
    Lazyload();
    Scrolling();
    ModalEnter();
    SidebarEnter();

    // TODO: image sizer on node js

    const portfolioSlider = new Slider({
        slider: 'portfolio',
        mode: 'carousel',
        mouseDrag: true,
        responsive: {
            1600: {
                items: 3,
            },
            1400: {
                items: 2,
            },
            800: {
                items: 1,
            }
        }
    })

    const teamSlider = new Slider({
        slider: 'team',
        items: 1,
        mode: 'carousel',
        mouseDrag: true,
    })

    const reviewsSlider = new Slider({
        slider: 'reviews',
        items: 1,
        mode: 'carousel',
        mouseDrag: true,
    })

    const requestForm = new formHandler({
        form: '.js-request-form',
        fields: '.js-request-field',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }, () => {
        document.querySelector('.js-modal-request').classList.remove('is-show');
        document.querySelector('.js-success-title').innerText = 'Thanks for your request!'
        setTimeout(() => {
            document.querySelector('.js-success').classList.add('is-show');
        }, 300)
    })

    const mailingForm = new formHandler({
        form: '.js-mailing-form',
        fields: '.js-mailing-field',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }, () => {
        document.body.classList.add('is-non-scrolled')
        document.querySelector('.js-modal-bg').classList.add('is-show');
        document.querySelector('.js-success-title').innerText = 'Thanks for your subscribe!'
        setTimeout(() => {
            document.querySelector('.js-success').classList.add('is-show');
        }, 300)
    })

    setTimeout(() => {
        document.body.classList.add('transitioned')
    })
}

document.addEventListener('DOMContentLoaded', App)