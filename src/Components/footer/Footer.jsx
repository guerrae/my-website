import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

class Footer extends React.Component{
    render() {
        return(
            <div className="Footer">
                <div className="footer-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/efrain-guerra">
                        <LinkedInIcon className="footer-icon-L" style={{fontSize: 35, marginLeft: '25px', marginRight: '25px'}}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/guerrae?tab=repositories">
                        <GitHubIcon className="footer-icon-G" style={{fontSize: 30, marginRight: '25px'}}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCKEIn0wp3FEjn6iIAoU80Fg">
                        <YouTubeIcon className="footer-icon-Y" style={{fontSize: 35, marginRight: '25px'}}/>
                    </a>
                </div>
                <div className="footer-title">
                    Efrain Guerra {(new Date().getFullYear())}
                </div>
            </div>
        )
    }
}
export default Footer;