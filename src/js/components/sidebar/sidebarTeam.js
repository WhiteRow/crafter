import _ from 'lodash/core';
import CreateElement from '../helpers/createElement'; 

export default function SidebarTeam (data) {
    let Members = {};

    _.each(data, (member) => Members[`member${member.id}`] = member);   

    const createDiv = (attrs, ...childs) => {
        return CreateElement('div', attrs, ...childs)
    }

    // Main container
    const sidebarBox = createDiv({
        class: 'sidebar-rendered sidebar-team'
    })

    const createSocialNode = (socialMedias) => {
        const sidebarMemberSocial = createDiv({
            class: 'sidebar-team-member-social'
        })

        for (let socialMedia in socialMedias) {

            // const iconType = CreateElement('use', {
            //     'xlink:href': `#${socialMedia}-icon`
            // })

            // const icon = CreateElement('svg', {
            //     class: 'sidebar-team-member-social-icon',
            // }, iconType)

            const icon = CreateElement('img', {
                class: 'sidebar-team-member-social-icon',
                src: `./images/${socialMedia}.png`
            })

            const link = CreateElement('a', {
                href: socialMedias[socialMedia],
                class: 'sidebar-team-member-social-link',
            }, icon)

            sidebarMemberSocial.appendChild(link)
        }

        return sidebarMemberSocial
    }

    // Member node
    const createMainNode = () => {
        for (let member in Members) {

            // image
            const sidebarMemberImage = CreateElement('img', {
                class: 'sidebar-team-member-avatar',
                src: Members[member].avatar
            })
            
            // name
            const sidebarMemberName = createDiv({
                class: 'sidebar-team-member-name'
            }, Members[member].name)
    
            // position
            const sidebarMemberPosition = createDiv({
                class: 'sidebar-team-member-position'
            }, Members[member].position)
    
             // dscr
            const sidebarMemberDescription = CreateElement('p', {
                class: 'sidebar-team-member-description'
            }, Members[member].dscr)

            // social
            const sidebarMemberSocial = createSocialNode(Members[member].socialMedias)
    
            // info
            const sidebarMemberInfo = createDiv({
                class: 'sidebar-team-member-info'
            }, sidebarMemberName, sidebarMemberPosition, sidebarMemberDescription, sidebarMemberSocial)
        
            const sidebarMember = createDiv({
                class: 'sidebar-team-member'
            }, sidebarMemberImage, sidebarMemberInfo)
    
            sidebarBox.appendChild(sidebarMember)
        }
    }

    createMainNode()

    // End
    return sidebarBox
}