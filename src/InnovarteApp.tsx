import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  SingleSectionContainer,
  Hero,
  CompTesting
} from './Components';

import { Benefits, FAQ, OurCourses, Pricing, Testimonials } from '@/Sections';

export const InnovarteApp = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <Header />
        <SectionContainer>
          <SingleSectionContainer>
            <Hero></Hero>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <Benefits></Benefits>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <OurCourses></OurCourses>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <Testimonials></Testimonials>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <Pricing></Pricing>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <FAQ></FAQ>
          </SingleSectionContainer>
          {/* //? Componente de Testing. */}
          <SingleSectionContainer>
            <CompTesting></CompTesting>
          </SingleSectionContainer>
          {/* //? Componente de Testing. */}
        </SectionContainer>
      </GrandContainer>
    </AppContainer>
  );
};
