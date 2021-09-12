import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    }, []);

    if (props.data) {
        var barbershopPic = "images/aboutMe.jpg";
        var barbershopPic2 = "images/aboutMe2.jpg";

    }
    return (
        <section data-aos="fade-up" id="about">
            <div className="Aboutcontainer">
                <div data-aos="flip-up" className="aboutImg">
                    <img src={barbershopPic} alt="" />
                </div>
                <div style={{ color: 'white' }} data-aos="fade-up">
                    <h2 style={{ color: 'orange' }} >קצת על עצמי</h2>
                    ,אני שניר<br />
                    ספר מתחיל מראשון לציון<br />
                    תבואו נדאג לכם
                </div>
                <div data-aos="fade-up" className="bio">
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