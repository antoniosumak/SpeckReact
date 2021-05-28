import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import { ButtonTable, Counter, Grid } from "../lib/style/generalStyles";
import EventsCard from "../components/EventsCard/EventsCard";
import React, { useState, useEffect, useImperativeHandle } from "react";
import eventMock from "../lib/Mock/event";
import { Center } from "../lib/style/generalStyles";
import Loader from "react-loader-spinner";
import SearchBar from "../components/SearchBar/SearchBar";
import eventsStore from "../store/EventsStore";
import eventsMock from "../lib/Mock/event";
import { GridHeader } from "../lib/style/generalStyles";
import Button from "../components/Button/Button";
import { observer } from "mobx-react";

const Events = () => {
  const [events, setEvents] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState(0);

  useEffect(() => {
    if (eventsStore.eventsLength === 0) {
      setTimeout(() => {
        eventsStore.setEvents(eventsMock);
        setEvents(eventsStore.getEvents);
        setFilteredEvents(eventsStore.getEvents);
      }, 1000);
    } else {
      setEvents(eventsStore.getEvents);
      setFilteredEvents(eventsStore.getEvents);
    }
  }, [events]);

  const [searchTerm, setSearctTerm] = useState("");
  const Provedi = (prop) => {
    setSearctTerm(prop.target.value);
  };

  function handleAddEvent() {
    const newEvent = {
      id: eventsStore.eventsLength + 1,
      imageUrl: "",
      imageAlt: "Frontend best practices",
      title: "Frontend best practices",
      shortDescription:
        "Best frontend practices for developers. Learn advanced CSS techniques and much more...",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?",
      isFeatured: false,
      location: "Parkić",
      dateTime: "16.10. (12:00-16:00h)",
      availability: "50/60",
      company: "Five",
    };
    eventsStore.setEvent(newEvent);
  }

  return (
    <>
      <Main>
        <Section gridSize={true}>
          <Center>
            <SearchBar placeholder="Search event by title" Provedi={Provedi} />
          </Center>
          <GridHeader>
            <ButtonTable onClick={handleAddEvent}>Add</ButtonTable>
            <Counter>{eventsStore.eventsLength}</Counter>
          </GridHeader>
          <Center>
            {!events ? (
              <Loader
                type="TailSpin"
                color="#e4b43c"
                height={100}
                width={100} //3 secs
              />
            ) : (
              <Grid columns={4}>
                {events
                  .filter((event) => {
                    if (searchTerm === "") {
                      return event;
                    } else if (
                      event.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return event;
                    }
                  })
                  .map((event) => (
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
          </Center>
        </Section>
      </Main>
    </>
  );
};

export default observer(Events);
