import React, { useState } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contact = (props) => {

    return (
        <section id="contact" style={{ textAlign: "center" }}>
            <span className="mark">צור קשר</span><br />
            פלאפון: 0523679033 <br />
            Vashdi7002@gmail.com :אימייל <br /><br /><br />
            <LocationOnIcon fontSize="large" color="secondary" /> <br />
            כתובת: לחי 2, קרית ים <br />

        </section >
    )
}
export default Contact;