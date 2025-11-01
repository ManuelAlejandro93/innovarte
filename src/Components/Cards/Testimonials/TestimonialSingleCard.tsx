import { AppToggleButton, AppGeneralText } from '@/Components';
import { yellowButtonsHover } from '@/UI';
import { TestimonialSingleCardDataInterface } from '@/Interfaces';
import { useState } from 'react';

export const TestimonialSingleCard = ({
  testimonial,
  fullTestimonial,
  testimonial_user_career,
  testimonial_user_name,
  testimonial_user_photo
}: TestimonialSingleCardDataInterface) => {
  const [isFullTestimonialOpen, setIsFullTestimonialOpen] =
    useState<boolean>(false);

  const onClickTestimonialToggleButton = () => {
    setIsFullTestimonialOpen((state) => !state);
  };

  return (
    <div
      className={`rounded-lg border-2 border-app-white-90 w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[360px] p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-around bg-app-blue-95 hover:bg-app-blue-90`}
    >
      <AppGeneralText
        className='italic'
        text={`"${
          testimonial ??
          'Fit your coursework around your existing commiments and obligations.'
        }" `}
      />
      {!isFullTestimonialOpen ? (
        ''
      ) : (
        <AppGeneralText
          className='font-extrabold scale-90 animate-fade-down'
          text={fullTestimonial}
        />
      )}

      <div className='testimonial-botton-div-container flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            src={`${
              testimonial_user_photo ??
              'https://res.cloudinary.com/dkr08foul/image/upload/v1760477803/Photo2_qxph1t.png'
            }`}
            alt='testimonia_user_photo'
            className='w-14 h-auto md:w-12 lg:w-16 xl:w-20'
          />
          <div className='ml-2'>
            <AppGeneralText text={`${testimonial_user_name ?? 'Sarah Lee'}`} />
            <AppGeneralText
              className='font-bold'
              text={`${testimonial_user_career ?? 'Civil Engineering'}`}
              text_color='text-app-blue-50'
            />
          </div>
        </div>
        <AppToggleButton
          text={!isFullTestimonialOpen ? 'Leer Completa' : 'Cerrar Historia'}
          className={yellowButtonsHover}
          toogleFunction={onClickTestimonialToggleButton}
        />
      </div>
    </div>
  );
};

//
