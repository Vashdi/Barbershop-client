import React from "react";
import './Price.css'

const Price = () => {
    return (<section id="price">
        <p className="priceTitle">מחירון מספרה</p>
        <div className="bPosition">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
        </div>
        <div className="cPosition">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
        </div>
        <div className="aPosition">

            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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