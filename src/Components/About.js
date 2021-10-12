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
                    <p>
                        .אני שניר ספר מקצועי מראשון לציון<br />
                        ,מהרגע שהתחלתי לעסוק במקצוע התאהבתי<br />
                        ,השתפרתי ולמדתי <br />
                        .והיום אני הבחירה הנכונה בשביל השיער והזקן שלכם<br />
                        .מזמין אתכם אליי וזמין לכולם תמיד <br /><br /><br />
                        😉תבואו נדאג לכם<br />
                    </p>
                </div>
                <div data-aos="fade-up" className="bioShop">
                    <h2 style={{ color: 'orange' }} >קצת על המספרה</h2>
                    ,המספרה בראשון לציון <br />
                    אווירה טובה וצעירה<br />
                    תבואו נדאג לכם
                </div>
                <div data-aos="flip-up">
                    <img className="barbershop" src={barbershopPic2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;