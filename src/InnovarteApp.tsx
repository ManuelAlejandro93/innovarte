import {
  GrandContainer,
  SingleSectionContainer,
  AppContainer,
  SectionContainer
} from './Components';

export const InnovarteApp = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <h1 className='bg-red-200'>titulo de header</h1>
        <SectionContainer>
          <SingleSectionContainer>
            <h1 className='bg-app-orange-50'>Titulo de seccion</h1>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <h1>Titulo de seccion</h1>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <h1>Titulo de seccion</h1>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <h1>Titulo de seccion</h1>
          </SingleSectionContainer>
        </SectionContainer>
      </GrandContainer>
      <h1 className='bg-red-200'>titulo de footer</h1>
    </AppContainer>
  );
};
