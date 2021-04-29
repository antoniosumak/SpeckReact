import React from "react";
import Button from "../Button/Button";
import FlexRow from "../FlexRow/FlexRow";

import { Event, Content, Item, ItemTitle, ItemValue } from "./EventCardStyles";

const EventCard = ({ location, dateTime, seats, firm, buttonText }) => {
  return (
    <Event>
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

export default EventCard;
