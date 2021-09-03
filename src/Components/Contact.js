import React from 'react'
import './contact.css'

const Contact = (props) => {
    return (
        <section id="contact">
            <div className="contactContainer">
                <div>
                    <h2 className="titleContact">צור קשר</h2>
                    <p className="firstRow">,אם אתה נתקל בבעיה</p>
                    <p className="secondRow">מוזמן לצור איתי קשר בכל דרך</p>
                </div>

                <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div>
                    <h3>כתובת</h3>
                    <p>לחי 2, קרית ים</p>
                </div>
                <div class="icon2"><i class="fa fa-phone" aria-hidden="true"></i></div>
                <div>
                    <h3>פלאפון</h3>
                    <p>0523679033</p>
                </div>
                <div class="icon3"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                <div>
                    <h3>אימייל</h3>
                    <span style={{ fontSize: "3rem" }}>Vashdi7002@gmail.com</span>
                </div>
                <a className="wazeContact" href={`https://waze.com/ul?ll=32.8539957,35.0709409navigate=yes`}>
                    Waze נווט באמצעות
                </a>
            </div>
            {/* <img src="images/contactbg.jpeg" alt="name" className="imageContact" /> */}

        </section >
    )
}
export default Contact;