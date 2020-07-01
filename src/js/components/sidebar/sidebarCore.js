import ModalCore from '../modal/modalCore';
import LoadData from '../helpers/loadData';

export default function SidebarCore(sidebar, render) {
    const Privates = {};

    const innerSidebarContent = () => {
        LoadData(sidebar)
            .then(data => {
                Privates._inside.sidebarContainer = render(data);
                Privates._inside.sidebarNode.insertAdjacentElement(
                    'beforeEnd', Privates._inside.sidebarContainer
                ) 
                
            })
            .then(() => Privates._inside.loadingNode.classList.add('is-hidden'))
    }


    const showCallback = () => {
        if (Privates._inside.sidebarContainer === 'empty') {
            setTimeout(() => innerSidebarContent(), 1000);
        } 
        else {
            Privates._inside.sidebarNode.insertAdjacentElement(
                'beforeEnd', Privates._inside.sidebarContainer
            )
        }      
    }

    const closeCallback = () => {
        console.log(sidebar);
        
        const sidebarContainer = document.querySelector('.js-sidebar-container');        
        if (sidebarContainer.classList.contains(`sidebar-${sidebar}`)) {
            sidebarContainer.remove();
        }
    }
    
    Privates._inside = {
        sidebarNode: document.querySelector('.js-sidebar'),
        loadingNode: document.querySelector('.js-sidebar-loading'),
        sidebarClose: '.js-close-sidebar',
        sidebarShow: `.js-show-${sidebar}-sidebar`,
        sidebarContainer: 'empty'
    }

    Privates.settings = {
        loadingHiddenClass: 'is-hidden',
        sidebarShowClass: 'is-show',
    }

    const sidebarCoreWork = new ModalCore({
        showButtons: Privates._inside.sidebarShow,
        closeButtons: Privates._inside.sidebarClose,
        modal: `.js-sidebar`,
        modalShowClass: Privates.settings.sidebarShowClass
    }, showCallback, closeCallback)
}