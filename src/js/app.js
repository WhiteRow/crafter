import "../styles/app.sass";
import './config/images-import.js'

import Menu from './components/menu';

function Main () {
    Menu();

    setTimeout(() => {
        document.body.classList.add('transitioned')
    })
}

document.addEventListener('DOMContentLoaded', Main)