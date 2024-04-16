import React, { Component } from 'react'
import penFedImg from './penFed.png'
import amerisImg from './ameris.png'
import mfbImg from './mfb.png'
import ofgImg from './ofg.png'
import bohImg from './boh.png'
import renasantImg from './renasant.png'
import { textStyles, cardStyles, containerStyles } from './projects.styles'


class Projects extends Component {

    renderProjects = (projects) => {
        return projects.map((pro) => {
            return <div {...cardStyles} onClick={() => pro.link ? window.open(pro.link) : ''}>
                {!pro.icon ? 
                    <i className="fa fa-image"></i> : 
                    <img src={pro.icon} alt="Avatar" />}
                <div {...textStyles}>
                    <h4><b>{pro.name}</b></h4>
                    <p>{pro.description}</p>
                </div>
            </div>
        })
    }

    render() {
        const projects = [
            {
                icon: mfbImg,
                name: 'MFB',
                link: '',
                description: 'MidFirst Bank'
            },
            {
                icon: ofgImg,
                name: 'OFG',
                link: '',
                description: 'Oriental Bank'
            },
            {
                icon: bohImg,
                name: 'BOH',
                link: '',
                description: 'Bank of Hawaii'
            },
            {
                icon: amerisImg,
                name: 'Ameris',
                link: '',
                description: 'Ameris Bank'
            },
            {
                icon: renasantImg,
                name: 'Renasant',
                link: '',
                description: 'Renesant Bank'
            },
            {
                icon: penFedImg,
                name: 'PenFed',
                link: '',
                description: 'PenFed is a teller application that hanldles bank consumers day to day duties'
            },
        ]
        return <div {...containerStyles} id={'projects'}>
            {this.renderProjects(projects)}
        </div>
    }
}

export { Projects }