import { BoltIcon } from 'lucide-react';
import { AppButton, AppGeneralText } from '@/Components';

export const TestimonialSingleCard = () => {
  return (
    <>
      <div className='rounded-lg border-2 border-app-white-90 w-full h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-around'>
        <AppGeneralText />
        <div className='testimonial-botton-div-container flex justify-between items-center'>
          <div className='flex items-center'>
            <BoltIcon className='size-9 md:size-10 lg:size-16  xl:bottom-0 xl:size-16 text-app-grey-20' />
            <AppGeneralText
              className='ml-2'
              text='Sarah Lee'
            />
          </div>
          <AppButton text={'Read Full Story'}></AppButton>
        </div>
      </div>
    </>
  );
};

//
