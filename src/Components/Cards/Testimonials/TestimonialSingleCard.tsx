import { BoltIcon } from 'lucide-react';
import { AppButton, AppGeneralText } from '@/Components';

export const TestimonialSingleCard = () => {
  return (
    <>
      <div className='rounded-lg border-2 border-app-white-90 w-full h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-around'>
        <AppGeneralText />
        <div className='testimonial-botton-div-container flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src='https://res.cloudinary.com/dkr08foul/image/upload/v1760477803/Photo2_qxph1t.png'
              alt='photo1'
              className='w-14 h-auto md:w-12 lg:w-16 xl:w-20'
            />
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
