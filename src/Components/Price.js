import React from "react";
import './Price.css'
import 'aos/dist/aos.css';
const Price = () => {

    return (<section id="price">
        <h1 data-aos="zoom-out-up" className="priceTitle">מחירון&nbsp;מספרה</h1>
        <div className="pricesContainer">
            <div data-aos="fade-right" className="pricePicture">
                <img src={'images/pricepic.jpg'} alt="" />
            </div>
            <div data-aos="fade-right" className="pricesBoard">
                <h1 style={{ color: 'white' }}>המחירים שלנו</h1>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪50&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />&nbsp;תספורת&nbsp;גבר&nbsp;</span>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪60&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />&nbsp;תספורת&nbsp;+&nbsp;זקן&nbsp;</span>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪30&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />&nbsp;תספורת&nbsp;ילד&nbsp;</span>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪15&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />&nbsp;שעוות&nbsp;פנים&nbsp;</span>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪70&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />&nbsp;תספורת&nbsp;+&nbsp;שעוות&nbsp;פנים&nbsp;</span>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪25&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />&nbsp;מסיכת&nbsp;פנים&nbsp;</span>
                    <span style={{ display: "flex", flexDirection: "row", width: '80%' }}>&nbsp;₪120&nbsp;<hr style={{ borderTop: "dotted 1px white", width: '90%' }} />(גוונים&nbsp;+&nbsp;צבע&nbsp;(משתנה&nbsp;לפי&nbsp;סוג&nbsp;שיער&nbsp;</span>
                </div>
            </div>
        </div>
        {/* <div className="priceContainer">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header">
                        <div class="pricing-cost">גבר</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header red">
                        <div class="pricing-cost">ילד</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header secondary">
                        <div class="pricing-cost">צבע</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
        </div> */}
    </section >)
}

export default Price;