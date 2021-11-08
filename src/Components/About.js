import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    var barbershopPic = "images/aboutMeNew.webp";
    var barbershopPic2 = "images/aboutMe2.jpeg";

    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    }, []);

    return (
        <section data-aos="fade-up" id="about">
            <div className="Aboutcontainer">
                <div data-aos="flip-up" className="aboutImg">
                    <img style={{ borderRadius: '20px' }} src={barbershopPic} alt="" />
                </div>
                <div style={{ color: 'white' }} className="bio" data-aos="fade-up">
                    <h1 style={{ color: 'orange' }} >קצת על עצמי</h1>
                    <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        שמי שניר מישאלוף, ספר מקצועי המתגורר ועובד בראשון לציון<br />
                        אני והמספריים חברים טובים מזה שנים<br />
                        כבר בתחילת דרכי המקצועית היה לי ברור שמדובר באהבה ממבט ראשון<br />
                        בכל יום שעובר אני חוקר ולומד עוד שיטות וקווים חדשים וכל זה <br />
                        בשביל שאתם תצאו היפים והשווים ביותר<br /><br />
                        אין לי ספק כי אני הבחירה הנכונה עבור<br />
                        <span role='img' aria-label=''>❗</span>הראש והזקן שלך
                    </p>
                </div>
                <div data-aos="fade-up" className="bioShop">
                    <h1 style={{ color: 'orange' }} >המספרה</h1>
                    <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        המספרה ממוקמת במערב ראשון לציון, מאחורי תכנון המקום עומדת מחשבה אחת האוירה<br />
                        בזמן תכנון המספרה היה לי חשוב לייצר עבורך, מקום מודרני עם אנרגיות מחשמלות<br />
                        תוכלו למצוא את כל סוגי הגזירה והפיידים השונים , קלאסיקות אהובות לצד חדשנות מתפרצת<br />
                        והחשוב ביותר יחס אישי לכל אחד ואחד<br /><br />
                        כל שנותר לך זה  לשריין תספורת ולהגיע<br />
                        <span role='img' aria-label=''>👌🏻</span>הצייסר עליי
                    </p>
                </div>
                <div data-aos="flip-up">
                    <img style={{ borderRadius: '20px' }} className="barbershop" src={barbershopPic2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;