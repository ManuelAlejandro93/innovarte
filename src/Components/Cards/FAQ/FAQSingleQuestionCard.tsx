import { AppGeneralText } from '@/Components';
import { PlusIcon, XIcon } from 'lucide-react';
import { blueHover } from '@/UI';
import { FAQSingleQuestionCardInterface } from '@/Interfaces';
import { useGetInGetOutUIEffect } from '@/Hooks';

export const FAQSingleQuestionCard = ({
  question,
  answer
}: FAQSingleQuestionCardInterface) => {
  const {
    uiEffectDynamicClass,
    renderingFullTestimonialToggle,
    onClickOrderForEffectToggle
  } = useGetInGetOutUIEffect();

  return (
    <div className='w-full h-fit grid gap-4 rounded-lg border-2 border-app-white-90 p-4 md:p-6 lg:p-8 xl:p-12 hover:bg-app-white-95'>
      <div className='flex justify-between items-center'>
        <AppGeneralText
          text={`${question ?? 'Can I enrolle in multiple courses at once?'}`}
          className='font-bold'
        />
        {!renderingFullTestimonialToggle ? (
          <PlusIcon
            className={`bg-app-blue-70 p-1 rounded-md md:size-8 lg:size-10 text-white animate-spin animate-once animate-duration-300 ${blueHover}`}
            onClick={() => onClickOrderForEffectToggle()}
          />
        ) : (
          <XIcon
            onClick={() => onClickOrderForEffectToggle()}
            className={`bg-app-blue-70 p-1 rounded-md md:size-8 lg:size-10 text-white animate-spin animate-once animate-duration-300 ${blueHover}`}
          />
        )}
      </div>
      {renderingFullTestimonialToggle ? (
        <AppGeneralText
          className={`${uiEffectDynamicClass}`}
          text={`${
            answer ??
            'Absolutly, you can enroll in multiple courses simultaneously and acces them at your convenience.'
          } `}
        />
      ) : (
        ''
      )}
      <div className='h-1 w-full bg-app-blue-50 rounded-full' />
    </div>
  );
};
//
