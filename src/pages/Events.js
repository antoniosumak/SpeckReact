import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import { Grid } from "../lib/style/generalStyles";
import EventsCard from "../components/EventsCard/EventsCard";

const Events = (withoutTopPadding) => {
  return (
    <>
      <Main>
        <Section withoutTopPadding={true}>
          <Grid columns={4}>
            <EventsCard
              title="UI/UX design workshop"
              location="Hodnik FOI-a"
              dateTime="14.10.(9:00-16:00)"
              seats="20/50"
              firm="Speck"
              buttonText="Procitaj vise"
            />
            <EventsCard
              title="UI/UX design workshop"
              location="Hodnik FOI-a"
              dateTime="14.10.(9:00-16:00)"
              seats="20/50"
              firm="Speck"
              buttonText="Procitaj vise"
            />
            <EventsCard
              title="UI/UX design workshop"
              location="Hodnik FOI-a"
              dateTime="14.10.(9:00-16:00)"
              seats="20/50"
              firm="Speck"
              buttonText="Procitaj vise"
            />
            <EventsCard
              title="UI/UX design workshop"
              location="Hodnik FOI-a"
              dateTime="14.10.(9:00-16:00)"
              seats="20/50"
              firm="Speck"
              buttonText="Procitaj vise"
            />
            <EventsCard
              title="UI/UX design workshop"
              location="Hodnik FOI-a"
              dateTime="14.10.(9:00-16:00)"
              seats="20/50"
              firm="Speck"
              buttonText="Procitaj vise"
            />
            <EventsCard
              title="UI/UX design workshop"
              location="Hodnik FOI-a"
              dateTime="14.10.(9:00-16:00)"
              seats="20/50"
              firm="Speck"
              buttonText="Procitaj vise"
            />
          </Grid>
        </Section>
      </Main>
    </>
  );
};

export default Events;
