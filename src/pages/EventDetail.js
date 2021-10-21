import React, {useEffect, useState} from 'react'

function EventDetail(props) {
    
   
    console.log(' --> ',props.m);
    return (
        <div>
            <h3>Event details</h3>

            <p>{props.m}</p>
            <p>{props.urlEventId}</p>

        </div>
    )
}

export default EventDetail
