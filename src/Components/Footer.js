import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = (props) => {
    if (props.data) {
        var networks = props.data.social.map((network) => {
            return <li className="social-links" key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <section id="footer">
            <div className="go-top">
                <a className="smoothscroll" href="#home"><i className="icon-up-open"></i></a>
            </div>

            <ul className="social-links">
                {networks}
                <li className="social-links" key="instagram"><a href="http://www.instagram.com/snirmishaelof_barbershop/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://wa.me/+972526662146"><WhatsAppIcon fontSize='large' /></a></li>
            </ul>
            <nav id="nav-wrap2">
                <ul id="nav2" className="nav2">
                    <li><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Footer;