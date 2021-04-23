import React from 'react';
import Button from '../Button/Button';
import {Link} from "react-router-dom";
import './Event.scss';


const Event = ({
    image,
    title,
    description,
    buttonText
}) => {
    return (
        <div className="Event">
            <figure className="Event-Figure">
                <img src={image} alt="Design" className="Event-Image"/>
            </figure>
            <h3 className="Event-Title">{title}</h3>
            <p className="Event-Description">{description}</p>
            <Link to="/event" className="Event-Link">
                <Button text={buttonText}/>
            </Link>
        </div>
    );
}

export default Event;