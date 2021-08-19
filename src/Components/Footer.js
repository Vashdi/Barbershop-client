import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = (props) => {
    return (
        <section id="footer">
            <div className="go-top">
                <a className="smoothscroll" href="#home"><i className="icon-up-open"></i></a>
            </div>

            <ul className="social-links">
                <li className="social-links" key="facebook"><a href="http://www.facebook.com/snir.mishaelof"><i className="fa fa-facebook"></i></a></li>
                <li className="social-links" key="instagram"><a href="http://www.instagram.com/snirmishaelof_barbershop/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://wa.me/+972526662146"><WhatsAppIcon fontSize='large' /></a></li>
            </ul>
            <nav id="nav-wrap2">
                <ul id="nav2" className="nav2">
                    <li><a className="smoothscroll" href="#home">בית</a></li>
                    <li><a className="smoothscroll" href="#Resume">גלריה</a></li>
                    <li><a className="smoothscroll" href="#about">חנות</a></li>
                    <li><a className="smoothscroll" href="#portfolio">קבע תור</a></li>
                    <li><a className="smoothscroll" href="#contact">צור קשר</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Footer;