import React from "react";
import './Price.css'

const Price = () => {
    return (<section id="price">
        <h1 className="priceTitle">מחירון&nbsp;מספרה</h1>
        <div className="priceContainer">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div class="pricing-plan">
                    <div class="pricing-header">
                        <h4 class="pricing-title">Starter</h4>
                        <div class="pricing-cost">גבר</div>
                        <div class="pricing-save">Save $99.00</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................50 שקל</li>
                        <li>תספורת וזקן................................................60 שקל</li>
                        <li>צבע..............................................................100 שקל</li>
                        <li>סידור זקן.......................................................20 שקל</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div class="pricing-plan">
                    <div class="pricing-header red">
                        <h4 class="pricing-title">Basic</h4>
                        <div class="pricing-cost">אישה</div>
                        <div class="pricing-save">Save $49.00</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................50 שקל</li>
                        <li>תספורת וזקן................................................60 שקל</li>
                        <li>צבע..............................................................100 שקל</li>
                        <li>סידור זקן.......................................................20 שקל</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12" className="pricingCard">
                <div class="pricing-plan">
                    <div class="pricing-header secondary">
                        <h4 class="pricing-title">Ultra</h4>
                        <div class="pricing-cost">ילד</div>
                        <div class="pricing-save">Save $99.00</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................50 שקל</li>
                        <li>תספורת וזקן................................................60 שקל</li>
                        <li>צבע..............................................................100 שקל</li>
                        <li>סידור זקן.......................................................20 שקל</li>

                    </ul>
                </div>
            </div>
        </div>
    </section >)
}

export default Price;