
import React from "react"
import { GoLocation } from 'react-icons/go'



export default function Card(props) {
   
    
    return (
        <div className="card">
            <img src={props.imageUrl} className="body_img"/>
            
            <div className="card_details">
            <span className="card_loc"><GoLocation/></span>
            <span className="card_loc">{props.location}</span>
            {/* <a href={props.googleMapsUrl}>View on Google Maps</a> */}
            <a href={props.googleMapsUrl} className="card_loc">View on Google Maps</a>
           <h1 className="card_title">{props.title}</h1>
           <span className="card_date">{props.startDate}</span>
           <span >-</span>
           <span className="card_date">{props.endDate}</span>
           <p className="card_des">{props.description}</p>

           </div>
        </div>
    )
}