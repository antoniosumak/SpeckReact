import Figure from "../components/Figure/Figure";
import EventsCard from "../components/EventsCard/EventsCard";
import FlexRow from "../components/FlexRow/FlexRow";
import Section from "../components/Section/Section";
import DescriptionParagraph from "../components/DescriptionParagraph/DescriptionParagraph";
import React, { useState, useEffect } from "react";
import eventsMock from "../lib/Mock/event";

import ImageUI from "../assets/images/design.jpg";
const EventTitle = "UX/UI workshop";

const Event = (props) => {
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  const routeEventId = parseInt(props.match.params.id);

  useEffect(() => {
    setEvents(eventsMock);
  }, [event]);

  useEffect(() => {
    events && setEvent(...events.filter((event) => event.id === routeEventId));
  }, [events, routeEventId]);

  return (
    <>
      <Section>
        <FlexRow>
          <Figure image={ImageUI} />
          <EventsCard
            title="bok"
            location="Hodnik FOI-a"
            dateTime="14.10.(9:00-16:00)"
            seats="20/50"
            firm="Speck"
            buttonText="Procitaj vise"
            withoutShadow
            withoutTitle
            titleSize
            paragraphSize
          />
        </FlexRow>
        <DescriptionParagraph />
      </Section>
    </>
  );
};

export default Event;
