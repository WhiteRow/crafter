import "../styles/app.sass";
import './config/images-import.js'

import Menu from './components/menu';
import Scrolling from './components/scrolling';

function Main () {
    Menu();
    Scrolling()

    setTimeout(() => {
        document.body.classList.add('transitioned')
    })
}

document.addEventListener('DOMContentLoaded', Main)