import React from "react";
import "./EventsCard.scss";
import Button from "../Button/Button"

const EventsCard = ({
    title, 
    location, 
    dateTime, 
    seats, 
    firm,
    buttonText,
    withoutShadow,
    withoutTitle,
    titleSize, 
    paragraphSize
}) => {
  const shadowClassName = withoutShadow ? "Event Event_shadow_none" : "Event";
  const titleClassName = withoutTitle ? "Event-Title Event-Title_title_none" : "Event-Title";
  const titleClass = titleSize ? "Event-ItemTitle Event-ItemTitle_16px" : "Event-ItemTitle";
  const paragraphClass = paragraphSize ? "Event-ItemValue Event-ItemValue_16px" : "Event-ItemValue";
    return (
        <div className={shadowClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <div className="Event-Content">
          <div className="Event-ContentRow">
            <div className="Event-Item">
              <h3 className={titleClass}>Lokacija</h3>
              <p className={paragraphClass}>{location}</p>
            </div>
            <div className="Event-Item">
              <h3 className={titleClass}>Datum i vrijeme</h3>
              <p className={paragraphClass}>{dateTime}</p>
            </div>
          </div>
          <div className="Event-ContentRow">
            <div className="Event-Item">
              <h3 className={titleClass}>Slobodna mjesta</h3>
              <p className={paragraphClass}>{seats}</p>
            </div>
            <div className="Event-Item">
              <h3 className={titleClass}>Firma</h3>
              <p className={paragraphClass}>{firm}</p>
            </div>
          </div>
        </div>
        <Button text={buttonText}/>
        </div>
     );
}
 
export default EventsCard;