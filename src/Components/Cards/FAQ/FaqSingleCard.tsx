import { AppButton, AppGeneralText, FAQHeader } from '@/Components';
import { PlusIcon } from 'lucide-react';

export const FaqSingleCard = () => {
  return (
    <>
      <div className='rounded-lg p-4 pb-8 md:p-6 lg:p-8 xl:p-12'>
        <FAQHeader
          title={'Frecuently Asked Questions'}
          subtitle={
            'Still you have any questions? Contact our team via support@innovarte.com'
          }
        />
        <AppButton text={'See all FAQ´s'}></AppButton>
      </div>
      <div className='w-full h-fit grid gap-4 rounded-lg border-2 border-app-white-90 p-4 md:p-6 lg:p-8 xl:p-12'>
        <div className='flex justify-between items-center'>
          <AppGeneralText
            text='Can I enrolle in multiple courses at once?'
            className='font-bold'
          />
          <PlusIcon className='bg-app-blue-70 p-1 rounded-md md:size-8 lg:size-10 text-white' />
        </div>
        <AppGeneralText text='Absolutly, you can enroll in multiple courses simultaneously and acces them at your convenience.' />
        <div className='h-1 w-full bg-app-blue-50 rounded-full' />
      </div>
    </>
  );
};
