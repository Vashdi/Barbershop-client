import React from "react";
import './Price.css'
import 'aos/dist/aos.css';
const Price = () => {

    return (<section id="price">
        <h1 data-aos="zoom-out-up" className="priceTitle">מחירון&nbsp;מספרה</h1>
        <div className="pricesContainer">
            <div data-aos="fade-right" className="pricePicture">
                <img style={{ borderRadius: '50px' }} src={'images/pricePic.png'} alt="" />
            </div>
            <div data-aos="fade-right" className="pricesBoard">
                <h1 style={{ color: 'white' }}>המחירים שלנו</h1>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span className="priceRow">&nbsp;₪50&nbsp;<hr className="dottedRow" />&nbsp;תספורת&nbsp;גבר&nbsp;</span>
                    <span className="priceRow">&nbsp;₪60&nbsp;<hr className="dottedRow" />&nbsp;תספורת&nbsp;+&nbsp;זקן&nbsp;</span>
                    <span className="priceRow">&nbsp;₪40&nbsp;<hr className="dottedRow" />&nbsp;תספורת&nbsp;ילד&nbsp;</span>
                    <span className="priceRow">&nbsp;₪15&nbsp;<hr className="dottedRow" />&nbsp;שעוות&nbsp;פנים&nbsp;</span>
                    <span className="priceRow">&nbsp;₪70&nbsp;<hr className="dottedRow" />&nbsp;תספורת&nbsp;+&nbsp;שעוות&nbsp;פנים&nbsp;</span>
                    <span className="priceRow">&nbsp;₪25&nbsp;<hr className="dottedRow" />&nbsp;מסיכת&nbsp;פנים&nbsp;</span>
                    <span className="priceRow">&nbsp;₪120&nbsp;<hr className="dottedRow" />(גוונים&nbsp;+&nbsp;צבע&nbsp;(משתנה&nbsp;לפי&nbsp;סוג&nbsp;שיער&nbsp;</span>
                </div>
            </div>
        </div>
    </section >)
}

export default Price;