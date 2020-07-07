import _ from 'lodash/core';

export default function Parallax(options) {
    let Privates = {};

    this.transform = () => {
        let yCoordinate = (pageYOffset * Privates.call.speed) / 2;

        if (Privates.call.direction === 'bottom') yCoordinate = -yCoordinate

        _.each(Privates.call.elements, element => 
            element.style['transform'] = `translate3d(0, ${yCoordinate}px, 0)`)
    }

    Privates = options;
    Privates.call = {
        elements: document.querySelectorAll(Privates.elements),
        speed: Privates.speed,
        direction: Privates.direction
    }

    window.addEventListener('scroll', this.transform)
}