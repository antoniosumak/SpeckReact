import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  Event as EventWrapper,
  Figure,
  Image,
  Title,
  Description,
  imgAlt,
  StyledLink,
} from "./EventStyles";

const Event = ({ image, title, description, buttonText, route }) => {
  return (
    <EventWrapper>
      <Figure>
        <Image src={image} alt="Design" />
      </Figure>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <StyledLink to={route}>
        <Button text={buttonText} />
      </StyledLink>
    </EventWrapper>
  );
};

export default Event;
