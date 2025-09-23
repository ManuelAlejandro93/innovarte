import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  SingleSectionContainer,
  Hero,
  CompTesting
} from './Components';

export const InnovarteApp = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <Header />
        <SectionContainer>
          <SingleSectionContainer>
            <Hero></Hero>
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
