import React from 'react';
import Button from '../Button/Button';
import {Link} from "react-router-dom";
import './Event.scss';
import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description,
    imgAlt,
    route
} from './EventStyles';

const Event = ({
    image,
    title,
    description,
    buttonText
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt="Design"/>
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link to="/event" className="Event-Link">
                <Button text={buttonText}/>
            </Link>
        </EventWrapper>
    );
}

export default Event;