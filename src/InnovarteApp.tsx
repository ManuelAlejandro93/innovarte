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
            <h1 className='font-regular'>Example Words</h1>
            <h1 className='font-medium'>Example Words</h1>
            <h1 className='font-semibold'>Example Words</h1>
            <h1 className='font-bold'>Example Words</h1>
          </SingleSectionContainer>
        </SectionContainer>
      </GrandContainer>
      <h1 className='bg-red-200'>titulo de footer</h1>
    </AppContainer>
  );
};
