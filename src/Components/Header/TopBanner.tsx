import { ArrowRight } from 'lucide-react';

export const TopBanner = () => {
  return (
    <div className='grid grid-cols-3 bg-app-orange-50 rounded-sm'>
      <div></div>
      <div className='flex justify-evenly items-center text-app-white-99 sm:col-span-3 sm:justify-center sm:p-2'>
        Free courses sale ends soon. Get it now ⭐{' '}
        <ArrowRight className='sm:ml-6' />
      </div>
      <div></div>
    </div>
  );
};
