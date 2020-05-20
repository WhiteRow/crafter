export default function Menu () {
    const burgerButton = document.querySelector('.js-burger');
    const menu = document.querySelector('.js-menu');

    const toggleClasses = function ( className)  {        
        burgerButton.classList.toggle(className);
        menu.classList.toggle(className)
    }

    burgerButton.addEventListener('click', () =>  toggleClasses('is-active'))
}
