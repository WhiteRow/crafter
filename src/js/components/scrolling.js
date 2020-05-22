import animateScrollTo from 'animated-scroll-to';
import _ from 'lodash/core';

export default function Scrolling () {
    const menuItems = document.querySelectorAll('.js-menu-item');

    const scrollTo = (item) => {
        const where = item.getAttribute('data-scroll-to');
        const block = document.querySelector(`.${where}`);

        animateScrollTo(block);
    }

    const bindItems = (item) => {
        item.addEventListener('click', () => scrollTo(item))
    }

    _.each(menuItems, (item) => bindItems(item))
}