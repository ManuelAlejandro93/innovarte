import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  SingleSectionContainer,
  Hero,
  CompTesting
} from './Components';

import { Benefits, OurCourses } from '@/Sections';

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
