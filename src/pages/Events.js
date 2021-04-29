import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import { Grid } from "../lib/style/generalStyles";
import EventsCard from "../components/EventsCard/EventsCard";
import React, { useState, useEffect } from "react";
import eventMock from "../lib/Mock/event";

const Events = () => {
  const [events, setEvent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setEvent(eventMock);
    }, 1000);
  }, [events]);

  return (
    <>
      <Main>
        <Section>
          {events && (
            <Grid columns={4}>
              {events.map((event) => (
                <EventsCard
                  key={event.id}
                  title={event.title}
                  location={event.location}
                  dateTime={event.dateTime}
                  seats={event.availability}
                  firm={event.company}
                  buttonText="Find out more"
                />
              ))}
            </Grid>
          )}
        </Section>
      </Main>
    </>
  );
};

export default Events;
