import { ArrowRight } from 'lucide-react';

import { fontsizes } from '@/Standars';

export const TopBanner = () => {
  return (
    <div
      className={`flex w-full bg-app-orange-50 rounded-sm p-2 ${fontsizes.general}`}
    >
      <div className='w-full flex items-center text-app-white-99 justify-center'>
        Free courses sale ends soon. Get it now ⭐
        <ArrowRight className='ml-2 md:ml-4' />
      </div>
    </div>
  );
};
