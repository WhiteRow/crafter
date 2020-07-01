import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
import _ from 'lodash/core';

export default function Slider(options) {
    
    new tns({
        container: `.js-${options.slider}-slider-wrapper`,
        controlsContainer: `.js-${options.slider}-slider-control`,
        items: options.items,
        mode: options.mode,
        mouseDrag: options.mouseDrag,
        loop: false,
        nav: false,  
        slideBy: 'page',
        autoplay: false,
        responsive: options.responsive
    });
}