import React from 'react'
import './SingleHour.css'
const SingleHour = (props) => {
    return (
        <input className="hourButton" type="button" onClick={() => props.callback(props.hour)} value={props.hour} />
    )
}

export default SingleHour;