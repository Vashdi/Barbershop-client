import React from 'react'
import './contact.css'

const Contact = (props) => {
    return (
        <section class="contact" id="contact">
            <img src="images/contactbg.jpeg" alt="name" className="imageContact" />
            <div class="box"></div>
            <div>
                <h2 className="content">צור קשר</h2>
                <p className="firstRow">,אם אתה נתקל בבעיה</p>
                <p className="secondRow">מוזמן לצור איתי קשר בכל דרך</p>
            </div>
            <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            <div>
                <h3 class="h3text">כתובת</h3>
                <p class="text">לחי 2, קרית ים</p>
            </div>
            <div class="icon2"><i class="fa fa-phone" aria-hidden="true"></i></div>
            <div>
                <h3 class="h3text2">פלאפון</h3>
                <p class="text2">0523679033</p>
            </div>
            <div class="icon3"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
            <div>
                <h3 class="h3text3">אימייל</h3>
                <p class="text3">Vashdi7002@gmail.com</p>
            </div>
            <a className="wazeContact" href={`https://waze.com/ul?ll=32.8539957,35.0709409navigate=yes`}>
                Waze נווט באמצעות
            </a>
        </section >
    )
}
export default Contact;