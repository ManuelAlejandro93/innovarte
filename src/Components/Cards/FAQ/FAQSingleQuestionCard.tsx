import { AppGeneralText } from '@/Components';
import { PlusIcon } from 'lucide-react';
import { blueHover } from '@/UI';
import { FAQSingleQuestionCardInterface } from '@/Interfaces';

export const FAQSingleQuestionCard = ({
  question,
  answer
}: FAQSingleQuestionCardInterface) => {
  return (
    <div className='w-full h-fit grid gap-4 rounded-lg border-2 border-app-white-90 p-4 md:p-6 lg:p-8 xl:p-12 hover:bg-app-white-95'>
      <div className='flex justify-between items-center'>
        <AppGeneralText
          text={`${question ?? 'Can I enrolle in multiple courses at once?'}`}
          className='font-bold'
        />

        <PlusIcon
          className={`bg-app-blue-70 p-1 rounded-md md:size-8 lg:size-10 text-white ${blueHover}`}
        />
      </div>

      <AppGeneralText
        text={`${
          answer ??
          'Absolutly, you can enroll in multiple courses simultaneously and acces them at your convenience.'
        } `}
      />
      <div className='h-1 w-full bg-app-blue-50 rounded-full' />
    </div>
  );
};
