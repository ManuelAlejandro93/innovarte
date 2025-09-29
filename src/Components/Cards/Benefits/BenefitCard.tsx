import { fontsizes } from '@/Standars';
import { Bolt } from '@/Icons';

export const BenefitCard = () => {
  return (
    <div className='w-80 h-80 p-8 bg-green-200 grid space-y-8'>
      <h3
        className={`w-full text-right ${fontsizes.titles} font-bold text-app-grey-20`}
      >
        01
      </h3>
      <div className={`flex flex-col justify-around ${fontsizes.general}`}>
        <p className={`text-app-grey-20 font-semibold ${fontsizes.cardTitles}`}>
          Flexible Learing Schedule
        </p>
        <p className={`text-app-grey-30 ${fontsizes.general}`}>lorem 2</p>
      </div>
      <Bolt className='size-8' />
    </div>
  );
};
