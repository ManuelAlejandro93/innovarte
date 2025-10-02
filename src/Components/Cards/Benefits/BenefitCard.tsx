import { fontsizes } from '@/Standars';
import { Bolt as BoltIcon } from '@/Icons';

export const BenefitCard = () => {
  return (
    <div className='bg-app-white-90 w-full h-[340px] md:h-52 lg:h-64 xl:h-96 rounded-2xl p-10 md:p-2 lg:p-8 grid grid-cols-1 space-y-2 md:space-y-2 lg:space-y-4 duration-500 hover:duration-500 hover:transition-all hover:bg-app-orange-50'>
      <h3
        className={`text-right ${fontsizes.titles} font-bold text-app-grey-20 max-h-max`}
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

      <div className='w-full flex justify-end max-h-max'>
        <BoltIcon className='size-9 md:size-10 lg:size-16 text-app-grey-20' />
      </div>
    </div>
  );
};
