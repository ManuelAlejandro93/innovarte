import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  SingleSectionContainer,
  Hero
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
        </SectionContainer>
      </GrandContainer>
    </AppContainer>
  );
};
