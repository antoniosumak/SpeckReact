import Figure from "../components/Figure/Figure";
import EventsCard from "../components/EventsCard/EventsCard";
import FlexRow from "../components/FlexRow/FlexRow";
import Section from "../components/Section/Section";
import DescriptionParagraph from "../components/DescriptionParagraph/DescriptionParagraph";

import ImageUI from "../assets/images/design.jpg";

const Event = () => {
    return ( 
        <>
        <Section>
        <FlexRow>
        <Figure image={ImageUI}/>
        <EventsCard title="UI/UX design workshop" location="Hodnik FOI-a" dateTime="14.10.(9:00-16:00)" seats="20/50" firm="Speck" buttonText="Procitaj vise" withoutShadow withoutTitle titleSize paragraphSize/>
        </FlexRow>
        <DescriptionParagraph/>
        </Section>
        </>
     );
}
 
export default Event;