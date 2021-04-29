import React, { useState, useEffect } from "react";
import eventMock from "../lib/Mock/event";
import Main from "../components/Main/Main";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { Grid } from "../lib/style/generalStyles";
import Event from "../components/Event/Event";
import Loader from "react-loader-spinner";
import { Center } from "../lib/style/generalStyles";
import { Route } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventMock);
      console.log(events);
    }, 1000);
  }, [events]);

  return (
    <>
      <Main>
        <Hero />
        <Section title="Featured events">
          <Center>
            {!events ? (
              <Loader
                type="TailSpin"
                color="#e4b43c"
                height={100}
                width={100} //3 secs
              />
            ) : (
              <Grid columns={3}>
                {events.map(
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

export default Home;
