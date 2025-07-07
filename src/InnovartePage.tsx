import { GrandContainer, SectionContainer, AppContainer } from './Components';

export const InnovartePage = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <h1 className='bg-red-200'>titulo de header</h1>
        <SectionContainer>
          <h1>Titulo de seccion</h1>
        </SectionContainer>
        <SectionContainer>
          <h1>Titulo de seccion</h1>
        </SectionContainer>
        <SectionContainer>
          <h1>Titulo de seccion</h1>
        </SectionContainer>
        <SectionContainer>
          <h1>Titulo de seccion</h1>
        </SectionContainer>
      </GrandContainer>
      <h1 className='bg-red-200'>titulo de footer</h1>
    </AppContainer>
  );
};
