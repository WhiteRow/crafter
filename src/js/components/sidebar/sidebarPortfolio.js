import _ from 'lodash/core';
import CreateElement from '../helpers/createElement'; 

export default function SidebarPortfolio (data) {
    let Projects = {};

    _.each(data, (project) => Projects[`project${project.id}`] = project); 

    // Main container
    const sidebarBox = CreateElement('div', {
        class: 'sidebar-rendered sidebar-portfolio fadein'
    })
    
    for (let index = 1; index <= Object.keys(Projects).length; index++) {

        const title = CreateElement('div', {
            class: 'sidebar-project-title'
        }, Projects[`project${index}`].title)

        const image = CreateElement('img', {
            src: Projects[`project${index}`].image,
            class: 'sidebar-project-image image',
        })

        const project = CreateElement('a', {
            class: 'sidebar-project',
        }, title, image)

        sidebarBox.appendChild(project);
    }

    // End
    return sidebarBox
}