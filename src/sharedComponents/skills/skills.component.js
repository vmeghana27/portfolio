import React, { Component } from 'react'
import { skillsStyles, skillsContainerStyles } from './skills.styles'


class Skills extends Component {

    displaySkills = () => {
        const skills = {
            'HTML': 5,
            'CSS': 5,
            'Javascript': 5,
            'Wavemaker': 4,
            'Angular': 5,
            'Typescript': 2,
            'React JS': 2,
            'Node JS': 2,
            'Jira': 4,
            'AWS': 2,
            'Azure': 2,
            'Openshift': 3,
            'Jenkins': 3,
            'Docker': 3,
            'SQL': 4,
            'Express': 2,
        }

        return Object.keys(skills).map((skill) => <div {...skillsStyles(skills[skill])}>{skill}</div>)
    }

    render() {
        return <div {...skillsContainerStyles} id={'skills'}>{this.displaySkills()}</div>
    }
}

export { Skills }