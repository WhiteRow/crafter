import CreateElement from '../helpers/createElement';
import sidebarCore from './sidebarCore';

export default function SidebarPortfolio () {
    const render = (data) => {
        const createP = (attrs, ...childs) => {
            return CreateElement('p', attrs, ...childs)
        }

        const createDiv = (attrs, ...childs) => {
            return CreateElement('div', attrs, ...childs)
        }

        const title = createDiv({
            class: 'sidebar-title'
        },
        data.title);

        const p1 = createP({
            class: 'sidebar-about-paragraph'
        }, data.p1)

        const p2 = createP({
            class: 'sidebar-about-paragraph'
        }, data.p2)

        const sidebarContainer = createDiv({
            class: 'sidebar-container fadein sidebar-portfolio js-container'
        },title,p1,p2)

        return sidebarContainer
    }

    const core2 =new sidebarCore('portfolio', render)
}