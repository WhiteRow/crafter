import "../styles/app.sass";
import './config/images-import.js'

import Menu from './components/menu';
import Scrolling from './components/scrolling';
import Slider from './components/slider';


function Main () {
    Menu();
    Scrolling();    

    const portfolioSlider = new Slider({
        slider: 'portfolio',
        items: 3,
        mode: 'carousel',
        responsive : {
            700: {
                items: 2,
            }
        }
    })

    // const teamSlider = new Slider({
    //     slider: 'team',
    //     items: 1,
    //     mode: 'carousel',
    // })

    setTimeout(() => {
        document.body.classList.add('transitioned')
    })
}

document.addEventListener('DOMContentLoaded', Main)