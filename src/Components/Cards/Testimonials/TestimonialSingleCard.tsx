import { AppButton, AppGeneralText } from '@/Components';

export const TestimonialSingleCard = () => {
  return (
    <div className='rounded-lg border-2 border-app-white-90 w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[360px] p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-around bg-app-blue-95'>
      <AppGeneralText
        className='italic'
        text='"Fit your coursework around your existing commiments and obligations."'
      />
      <div className='testimonial-botton-div-container flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            src='https://res.cloudinary.com/dkr08foul/image/upload/v1760477803/Photo2_qxph1t.png'
            alt='photo1'
            className='w-14 h-auto md:w-12 lg:w-16 xl:w-20'
          />
          <div className='ml-2'>
            <AppGeneralText text='Sarah Lee' />
            <AppGeneralText
              className='font-bold text-app-blue-50'
              text='Civil Engineering Student.'
            />
          </div>
        </div>
        <AppButton text={'Read Full Story'}></AppButton>
      </div>
    </div>
  );
};

//
