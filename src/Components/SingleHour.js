import React from 'react'
import './SingleHour.css'
const SingleHour = (props) => {
    return (<div className="distance">
        <input className="hourButton" type="button" onClick={() => props.callback(props.hour)} value={props.hour} />
    </div>)
}

export default SingleHour;