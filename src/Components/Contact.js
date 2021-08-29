import React from 'react'
import './contact.css'

const Contact = (props) => {
    return (
        <section class="contact" id="contact">
            <img src="images/contactbg.jpeg" alt="name" style={{ position: 'absolute', top: 10, left: 0, width: '100%', height: '570px' }} />
            <div class="box"></div>
            <div class="content">
                <h2>צור קשר</h2>
                <p>אם אתה נתקל בבעיה, מוזמן לצור איתי קשר בכל דרך</p>
            </div>
            <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            <div class="text">
                <h3 style={{ color: 'orange' }}>כתובת</h3>
                <p>לחי 2, קרית ים</p>
            </div>
            <div class="icon2"><i class="fa fa-phone" aria-hidden="true"></i></div>
            <div class="text2">
                <h3 style={{ color: 'orange' }}>פלאפון</h3>
                <p>0523679033</p>
            </div>
            <div class="icon3"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
            <div class="text3">
                <h3 style={{ color: 'orange' }}>אימייל</h3>
                <p>Vashdi7002@gmail.com</p>
            </div>
        </section >
    )
}
export default Contact;