import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  SingleSectionContainer,
  Hero,
  CompTesting
} from './Components';

import {
  Benefits,
  FAQ,
  Footer,
  OurCourses,
  Pricing,
  Testimonials
} from '@/Sections';

import { InnovarteIcon } from '@/Icons';

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
            <div className='rounded-lg border-2 border-app-white-90'>
              <FAQ></FAQ>
            </div>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <Footer></Footer>
          </SingleSectionContainer>

          <SingleSectionContainer>
            <InnovarteIcon></InnovarteIcon>
          </SingleSectionContainer>
        </SectionContainer>
      </GrandContainer>
    </AppContainer>
  );
};
