import React from 'react'
const About = (props) => {
    if (props.data) {
        var profilepic = "images/" + props.data.image;
        var bio = props.data.bio;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>קצת על עצמי</h2>
                    ,אני שניר<br />
                    ספר מתחיל מראשון לציון<br />
                    תבואו נדאג לכם
                </div>

            </div>
        </section>
    )
}

export default About;