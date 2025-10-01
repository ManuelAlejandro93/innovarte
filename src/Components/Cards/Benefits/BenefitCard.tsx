import { fontsizes } from '@/Standars';
import { Bolt } from '@/Icons';

export const BenefitCard = () => {
  return (
    <div className='bg-app-white-90 rounded-2xl md:w-45 md:h-45 lg:w-80 lg:h-80 p-10 md:p-8 grid grid-cols-1 space-y-2 md:space-y-8 lg:space-y-4 duration-500 hover:duration-500 hover:transition-all hover:bg-app-orange-50'>
      <h3
        className={`text-right ${fontsizes.titles} font-bold text-app-grey-20 max-h-max `}
      >
        01
      </h3>
      <div className={`flex flex-col justify-around ${fontsizes.general}`}>
        <p className={`text-app-grey-20 font-semibold ${fontsizes.cardTitles}`}>
          Flexible Learning Schedule
        </p>
        <p className={`text-app-grey-30 ${fontsizes.general}`}>
          Fit your coursework around your existing commiments and obligations.
        </p>
      </div>
      <div className='w-full flex justify-end max-h-max '>
        <Bolt className='size-9 md:size-14 lg:size-16 text-app-grey-20' />
      </div>
    </div>
  );
};
