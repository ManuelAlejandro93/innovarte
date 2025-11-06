import { fontsizes } from '@/Standars';
import { Bolt as BoltIcon } from '@/Icons';
import { BenefitInfoInterface } from '@/Interfaces';
import { blueHover } from '@/UI';

export const BenefitSingleCard = ({
  benefitNumber,
  benefitTitle,
  benefitDescription
}: BenefitInfoInterface & { benefitNumber: number }) => {
  return (
    <div
      className={`bg-app-blue-95 w-full h-52 md:h-64 lg:h-80 xl:h-96 rounded-2xl p-8 md:p-5 lg:p-8 xl:p-12 flex flex-col justify-between duration-150 hover:duration-150 hover:transition-all ${blueHover}`}
    >
      <h3
        className={`text-right ${fontsizes.titles} font-bold text-yellow-600 max-h-max`}
      >
        {benefitNumber ?? '01'}
      </h3>
      <div className={`flex flex-col justify-around ${fontsizes.general}`}>
        <p className={`text-app-grey-20 font-semibold ${fontsizes.cardTitles}`}>
          {benefitTitle ?? 'Flexible Learning Schedule'}
        </p>
        <p className={`text-app-grey-30 ${fontsizes.general}`}>
          {benefitDescription ??
            'Fit your coursework around your existing commiments and obligations.'}
        </p>
      </div>

      <div className='w-full flex justify-end max-h-max'>
        <BoltIcon className='size-8 lg:size-10 xl:size-14 text-app-blue-50' />
      </div>
    </div>
  );
};
//
