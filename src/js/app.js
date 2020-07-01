import "../styles/app.sass";
import './config/images-import.js'

import Menu from './components/menu';
import Scrolling from './components/scrolling';
import Slider from './components/slider';
import VideoModal from './components/modal/videoModal';
import SidebarAbout from './components/sidebar/sidebarAbout';
import SidebarPortfolio from './components/sidebar/sidebarPortfolio';

function App () {
    Menu();
    Scrolling();    
    VideoModal();
    SidebarAbout();
    SidebarPortfolio();
    
    const portfolioSlider = new Slider({
        slider: 'portfolio',
        mode: 'carousel',
        mouseDrag: true,
        responsive : {
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

    setTimeout(() => {
        document.body.classList.add('transitioned')
    })
}

document.addEventListener('DOMContentLoaded', App)