import Figure from "../components/Figure/Figure";
import EventCard from "../components/EventCard/EventCard";
import FlexRow from "../components/FlexRow/FlexRow";
import Section from "../components/Section/Section";
import DescriptionParagraph from "../components/DescriptionParagraph/DescriptionParagraph";
import React, { useState, useEffect } from "react";
import eventsMock from "../lib/Mock/event";

import ImageUI from "../assets/images/design.jpg";
const EventTitle = "UX/UI workshop";

const Event = (props) => {
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState("");
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
          <Figure image={event.imageUrl} />
          <EventCard
            location={event.location}
            dateTime={event.dateTime}
            seats={event.availability}
            firm={event.company}
            buttonText="Procitaj vise"
          />
        </FlexRow>
        <DescriptionParagraph />
      </Section>
    </>
  );
};

export default Event;
