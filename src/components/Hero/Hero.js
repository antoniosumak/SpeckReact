import React from "react";
import {
  SectionHero,
  SectionHeroOverlay,
  SectionHeroContent,
  SectionHeroHeading,
  SectionHeroSubheading,
} from "./HeroStyles";
const Hero = () => {
  return (
    <SectionHero>
      <SectionHeroOverlay>
        <SectionHeroContent>
          <SectionHeroHeading>
            Centar za podršku studentima i razvoj karijera na FOI
          </SectionHeroHeading>
          <SectionHeroSubheading>
            CPSRK aktivno radi na poboljšanju kvalitete cjelokupnog iskustva
            studiranja za studente i studentice FOI-ja na način da ih podržava,
            motivira i karijerno usmjerava. Svojim aktivnostima pomaže im kako
            bi se uspješno nosili s akademskim izazovima, napredovali kroz
            studij i počeli graditi svoju karijeru već tijekom studentskih dana.
          </SectionHeroSubheading>
        </SectionHeroContent>
      </SectionHeroOverlay>
    </SectionHero>
  );
};

export default Hero;
