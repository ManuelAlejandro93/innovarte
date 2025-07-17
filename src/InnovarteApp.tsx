import {
  GrandContainer,
  SingleSectionContainer,
  AppContainer,
  SectionContainer
} from './Components';

import { PhoneIcon } from '@heroicons/react/24/solid';
export const InnovarteApp = () => {
  return (
    <AppContainer>
      <GrandContainer>
        <h1 className='bg-red-200'>titulo de header</h1>
        <SectionContainer>
          <SingleSectionContainer>
            <h1 className='font-regular'>Example Words</h1>
            <PhoneIcon className='w-4 h-4'></PhoneIcon>
          </SingleSectionContainer>
        </SectionContainer>
      </GrandContainer>
      <h1 className='bg-red-200'>titulo de footer</h1>
    </AppContainer>
  );
};
