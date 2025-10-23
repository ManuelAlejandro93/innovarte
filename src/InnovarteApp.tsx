import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  SingleSectionContainer,
  Hero
} from './Components';

import {
  Benefits,
  FAQ,
  Footer,
  OurCourses,
  Pricing,
  Testimonials
} from '@/Sections';

import { homeID } from '@/Data';

export const InnovarteApp = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <Header id={homeID} />
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
            <div className='rounded-lg border-2 border-app-white-90'>
              <FAQ></FAQ>
            </div>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <Footer></Footer>
          </SingleSectionContainer>
        </SectionContainer>
      </GrandContainer>
    </AppContainer>
  );
};
