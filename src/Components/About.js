import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    var barbershopPic = "images/aboutMe.jpg";
    var barbershopPic2 = "images/aboutMe2.jpg";

    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    }, []);

    return (
        <section data-aos="fade-up" id="about">
            <div className="Aboutcontainer">
                <div data-aos="flip-up" className="aboutImg">
                    <img src={barbershopPic} alt="" />
                </div>
                <div style={{ color: 'white' }} className="bio" data-aos="fade-up">
                    <h1 style={{ color: 'orange' }} >קצת על עצמי</h1>
                    <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        .אני שניר ספר מקצועי מראשון לציון<br />
                        ,מהרגע שהתחלתי לעסוק במקצוע התאהבתי<br />
                        ,השתפרתי ולמדתי <br />
                        .והיום אני הבחירה הנכונה בשביל השיער והזקן שלכם<br />
                        .מזמין אתכם אליי וזמין לכולם תמיד <br /><br /><br />
                        😉תבואו נדאג לכם<br />
                    </p>
                </div>
                <div data-aos="fade-up" className="bioShop">
                    <h1 style={{ color: 'orange' }} >המספרה</h1>
                    <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        .שלי ממוקם בראשון לציון מערב Barbershop ה<br />
                        את המקום הקמתי ועיצבתי בעצמי<br />
                        מקום מודרני ומהפכני עם אווירה טובה<br />
                        שכוללת את כל סוגי הפיידים ושיטות גזירה הכי חדשניות<br />
                        וכמובן הכי חשוב יחס אישי לכל אחד<br /><br />
                        חבל שתפספס אירוע שכזה<br />
                        <span role='img' aria-label=''>👌🏻</span>  שריין לעצמך מקום חבר
                    </p>
                </div>
                <div data-aos="flip-up">
                    <img className="barbershop" src={barbershopPic2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;