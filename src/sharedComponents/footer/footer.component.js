import React, { Component } from 'react'
import { footerStyles, linkStyles, copyrightStyles, contactStyles } from './footer.styles'


class Footer extends Component {

    navigateURL = (platform) => {
        if (platform == 'github') {
            return window.open('https://github.com/vmeghana27')
        } else if (platform == 'instagram') {
            return window.open('https://www.instagram.com/meghanaaaaa27')
        } else if (platform == 'mail') {
            return window.open('mailto:meghanavundamatla9@gmail.com?subject=SendMail&body=Description')
        }
    }

    render() {
        return <div {...footerStyles} id={'contact'}>
            <div {...linkStyles}>
                <i class="fa fa-github" onClick={() => this.navigateURL('github')}></i>
                <i class="fa fa-instagram" onClick={() => this.navigateURL('instagram')}></i>
                <i class="fa fa-envelope" onClick={() => this.navigateURL('mail')}></i>
            </div>
            <div {...contactStyles}>
                <span>Designed and Developed by</span>
                <div>
                    <span>Meghana Vundamatla</span>
                    <span onClick={'tel: +1-469-514-4532'}>(214) 475 - 0375</span>
                </div>
            </div>
            <div {...copyrightStyles}>
                <span><i class="fa fa-copyright"></i> All Rights Reserved | 2024</span>
            </div>
        </div>
    }
}

export { Footer }