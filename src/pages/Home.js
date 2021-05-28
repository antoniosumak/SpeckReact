import React, { useState, useEffect } from "react";
import eventMock from "../lib/Mock/event";
import Main from "../components/Main/Main";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { Grid } from "../lib/style/generalStyles";
import Event from "../components/Event/Event";
import Loader from "react-loader-spinner";
import { Center } from "../lib/style/generalStyles";
import eventsStore from "../store/EventsStore";
import { observer } from "mobx-react";

const Home = () => {
  useEffect(() => {
    if (eventsStore.eventsLength === 0) {
      setTimeout(() => {
        eventsStore.setEvents(eventMock);
      }, 1000);
    }
  }, []);

  return (
    <>
      <Main>
        <Hero />
        <Section title="Featured events">
          <Center>
            {eventsStore.eventsLength === 0 ? (
              <Loader
                type="TailSpin"
                color="#e4b43c"
                height={100}
                width={100}
              />
            ) : (
              <Grid columns={3}>
                {eventsStore.getEvents.map(
                  (event) =>
                    event.isFeatured && (
                      <Event
                        key={event.id}
                        image={event.imageUrl}
                        title={event.title}
                        description={event.shortDescription}
                        imgAlt={event.imgAlt}
                        buttonText="Find out more"
                        route={`/event/${event.id}`}
                      />
                    )
                )}
              </Grid>
            )}
          </Center>
        </Section>
      </Main>
    </>
  );
};

export default observer(Home);
