import React from 'react'
import './Card.css'
import event_place_holder from './images/event_place_holder.png'
import { Link } from 'react-router-dom'

function Card(props) {

    

    return (

        
            <div className='card-wrap'>

                <Link to={`event_detail/${props.cardContent}`} className='event-card-link'>
                    <div className='img-holder'>
                        <img className='card-img' src={event_place_holder}></img>
                    </div>

                    <div className='card-content'>
                        <div className='card-title'>
                            <h3>
                                {props.cardTitle}
                            </h3>
                        </div>

                        <div className='card-description'>
                            <p>
                                {props.cardContent}
                            </p>
                        </div>

                    </div> 
                </Link>           
            </div>
        
    )
}

export default Card
