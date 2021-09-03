import React from 'react'
import './About.css'
const About = (props) => {
    if (props.data) {
        var profilepic = "images/" + props.data.image;
        var barbershopPic = "images/picture5.jpg";
    }
    return (
        <section id="about">
            <div className="Aboutcontainer">
                <div className="aboutImg">
                    <img src={barbershopPic} alt="" />
                </div>
                <div>
                    <h2>קצת על עצמי</h2>
                    ,אני שניר<br />
                    ספר מתחיל מראשון לציון<br />
                    תבואו נדאג לכם
                </div>
                <div className="bio">
                    <h2>קצת על עצמי</h2>
                    ,אני שניר<br />
                    ספר מתחיל מראשון לציון<br />
                    תבואו נדאג לכם
                </div>
                <div>
                    <img className="barbershop" src={barbershopPic} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;