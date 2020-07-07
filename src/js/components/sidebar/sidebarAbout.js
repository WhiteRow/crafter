import CreateElement from '../helpers/createElement'; 

export default function SidebarAbout (data) {
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

        const image = CreateElement('img', {
            class: 'sidebar-about-image image',
            src: data.image
        })

        const p1 = createP({
            class: 'sidebar-about-paragraph'
        }, data.p1)

        const p2 = createP({
            class: 'sidebar-about-paragraph'
        }, data.p2)

        const sidebarContainer = createDiv({
            class: 'sidebar-rendered sidebar-about fadein'
        },title,image,p1,p2)

        return sidebarContainer
}