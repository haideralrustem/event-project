import React from 'react'
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function EventsListing(props) {
    return (
        <div className='event-cards-body'>

        {props.recievedData.map(function(dataObj){
                            return <Card cardTitle={dataObj.eventTitle} 
                                        cardContent={dataObj.eventContent}></Card>;
        })}
            
        </div>
    )
}

export default EventsListing
