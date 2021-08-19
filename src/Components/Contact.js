import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './contact.css'

const Contact = (props) => {

    return (
        <section id="contact" style={{ textAlign: "center" }}>
            <span className="mark">צור קשר</span><br />
            פלאפון: 0523679033 <br />
            Vashdi7002@gmail.com :אימייל <br /><br /><br />
            <LocationOnIcon fontSize="large" color="secondary" /> <br />
            כתובת: לחי 2, קרית ים <br />
            <a className="waze" href={`https://waze.com/ul?ll=32.8539957,35.0709409navigate=yes`}>
                Waze נווט באמצעות
            </a>
        </section >
    )
}
export default Contact;