import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Icon } from '@iconify/react';
import "./Footer.css"

const Footer = (props) => {
    return (
        <section id="footer">
            <div className="go-top">
                <a className="smoothscroll" href="#home"><i className="icon-up-open"></i></a>
            </div>
            <div className="socialLinksFooter">
                <a className="facebookFooter" href="http://www.facebook.com/snir.mishaelof"><i className="fa fa-facebook" ></i></a>
                <a className="instaFooter" href="http://www.instagram.com/snirmishaelof_barbershop/"><i className="fa fa-instagram"></i></a>
                <a className="whatsappFooter" href="https://wa.me/+972502341694"><WhatsAppIcon fontSize='large' /></a>
                <a className="wazeFooter" href={`https://waze.com/ul?ll=32.8539957,35.0709409navigate=yes`}><Icon icon="mdi:waze" width="35" height="40" /></a>
            </div>
            <nav id="nav-wrap2">
                <ul id="nav2" className="nav2">
                    <li><a className="smoothscroll" href="#home">בית</a></li>
                    <li><a className="smoothscroll" href="#about">קצת על עצמי</a></li>
                    <li><a className="smoothscroll" href="#Gallery">גלריה</a></li>
                    <li><a className="smoothscroll" href="#shop">חנות</a></li>
                    <li><a className="smoothscroll" href="#price">מחירון</a></li>
                    <li><a className="smoothscroll" href="#contact">צור קשר</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Footer;