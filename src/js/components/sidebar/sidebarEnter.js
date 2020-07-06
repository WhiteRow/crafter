import _ from 'lodash/core';

import SidebarAbout from './sidebarAbout';
import SidebarPortfolio from './sidebarPortfolio';
import SidebarTeam from './sidebarTeam';
import LoadData from '../helpers/loadData';

export default function SidebarEnter () {
    let Elements = {
        general: {
            container: document.querySelector('.js-sidebar-container'),
            loading: document.querySelector('.js-sidebar-loading'),
            openedSidebar: 'empty',
        },
        buttons: {
            about: document.querySelector('.js-render-about'),
            portfolio: document.querySelector('.js-render-portfolio'),
            team: document.querySelectorAll('.js-render-team')
        },
        rendered: {}
    }

    const innerContent = (sidebar, func) => {
        if (Elements.general.openedSidebar !== sidebar) {
            Elements.general.container.innerHTML = ''
        }
        
        Elements.general.openedSidebar = sidebar;

        if (!Elements.rendered[sidebar]) {
            Elements.general.loading.classList.remove('is-hidden')

            setTimeout(() => {
                LoadData(sidebar)
                    .then(data => {                        
                        Elements.rendered[sidebar] = func(data);
                        Elements.general.container.appendChild(Elements.rendered[sidebar]); 
                        Elements.general.loading.classList.add('is-hidden')    
                    })
            }, 1000)
        } else {            
            Elements.general.container.appendChild(Elements.rendered[sidebar]);
        }
    }

    Elements.buttons.about.addEventListener('click', () => innerContent('about', SidebarAbout))
    Elements.buttons.portfolio.addEventListener('click', () => innerContent('portfolio', SidebarPortfolio))
    _.each(Elements.buttons.team, (teamButton) => 
                        teamButton.addEventListener('click', () => innerContent('team', SidebarTeam)))
}