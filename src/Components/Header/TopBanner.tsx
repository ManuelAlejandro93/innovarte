import { ArrowRight } from 'lucide-react';

export const TopBanner = () => {
  return (
    <div className='flex w-full bg-app-orange-50 rounded-sm p-2 sm:p-0'>
      <div className='w-full flex items-center text-app-white-99 justify-center'>
        Free courses sale ends soon. Get it now ⭐
        <ArrowRight className='ml-2 sm:ml-0' />
      </div>
    </div>
  );
};
