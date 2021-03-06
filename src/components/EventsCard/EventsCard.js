import React from "react";
import Button from "../Button/Button";
import FlexRow from "../FlexRow/FlexRow";

import {
  Event,
  Title,
  Content,
  Item,
  ItemTitle,
  ItemValue,
} from "./EventsCardStyles";

const EventsCard = ({ title, location, dateTime, seats, firm, buttonText }) => {
  return (
    <Event>
      <Title>{title}</Title>
      <Content>
        <FlexRow>
          <Item>
            <ItemTitle>Lokacija</ItemTitle>
            <ItemValue>{location}</ItemValue>
          </Item>
          <Item>
            <ItemTitle>Datum i vrijeme</ItemTitle>
            <ItemValue>{dateTime}</ItemValue>
          </Item>
        </FlexRow>
        <FlexRow>
          <Item>
            <ItemTitle>Slobodna mjesta</ItemTitle>
            <ItemValue>{seats}</ItemValue>
          </Item>
          <Item>
            <ItemTitle>Firma</ItemTitle>
            <ItemValue>{firm}</ItemValue>
          </Item>
        </FlexRow>
      </Content>
      <Button text={buttonText} />
    </Event>
  );
};

export default EventsCard;
