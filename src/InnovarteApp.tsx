import {
  GrandContainer,
  AppContainer,
  Header,
  SectionContainer,
  Hero
} from './Components';

export const InnovarteApp = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <Header />
        <SectionContainer>
          <Hero></Hero>
          <Hero></Hero>
          <Hero></Hero>
          <Hero></Hero>
        </SectionContainer>
      </GrandContainer>
    </AppContainer>
  );
};
