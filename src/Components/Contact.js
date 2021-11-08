import React from 'react'
import './contact.css'
import 'aos/dist/aos.css';

const Contact = () => {
    return (
        <section data-aos="fade-up" id="contact">
            <div>
                <h2 data-aos="fade-up" className="titleContact">צור קשר</h2>
                <p data-aos="fade-up" className="firstRow">לכל שאלה ובקשה</p>
                <p data-aos="fade-up" className="secondRow">מוזמנים לפנות אלי בכל אחת מהדרכים</p>
            </div>
            <div className="contactContainer">
                <div className="paddingIcons">
                    <div data-aos="fade-up" className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                    <div data-aos="fade-up">
                        <h3 style={{ color: '#F06000' }}>כתובת</h3>
                        <p style={{ fontSize: "3rem" }}>הלוויתן 46, ראשון לציון</p>
                    </div>
                </div>
                <div className="paddingIcons">
                    <div data-aos="fade-up" className="icon2"><i className="fa fa-phone" aria-hidden="true"></i></div>
                    <div data-aos="fade-up">
                        <h3 style={{ color: '#F06000' }}>פלאפון</h3>
                        <p style={{ fontSize: "3rem" }}>0502341694</p>
                    </div>
                </div>
                <div className="paddingIconsEmail">
                    <div data-aos="fade-up" className="icon3"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div data-aos="fade-up">
                        <h3 style={{ color: '#F06000' }}>אימייל</h3>
                        <span style={{ fontSize: "3rem" }}>Smbarbershop@gmail.com</span>
                    </div>
                </div>
            </div>
            <a data-aos="fade-up" className="wazeContact" href={`https://waze.com/ul?ll=31.988110,34.781229navigate=yes`}>
                Waze נווט באמצעות
            </a>
        </section >
    )
}
export default Contact;