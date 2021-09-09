import React from "react";
import './Price.css'
import 'aos/dist/aos.css';

const Price = () => {

    return (<section data-aos="fade-up" id="price">
        <h1 data-aos="zoom-out-up" className="priceTitle">מחירון&nbsp;מספרה</h1>
        <div className="priceContainer">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header">
                        <h4 class="pricing-title">~~~~</h4>
                        <div class="pricing-cost">גבר</div>
                        <div class="pricing-save">~~~~</div>
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
                        <h4 class="pricing-title">~~~~</h4>
                        <div class="pricing-cost">ילד</div>
                        <div class="pricing-save">~~~~</div>
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
                        <h4 class="pricing-title">~~~~</h4>
                        <div class="pricing-cost">צבע</div>
                        <div class="pricing-save">~~~~</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
        </div>
    </section >)
}

export default Price;