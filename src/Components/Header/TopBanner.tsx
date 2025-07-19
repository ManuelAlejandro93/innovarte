import { ArrowRight } from 'lucide-react';

export const TopBanner = () => {
  return (
    <div className='grid grid-cols-3 bg-app-orange-50 rounded-sm'>
      <div></div>
      <div className='flex justify-evenly items-center text-app-white-99'>
        Free courses sale ends soon. Get it now ⭐ <ArrowRight />
      </div>
      <div></div>
    </div>
  );
};
