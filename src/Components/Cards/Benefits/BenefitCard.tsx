import { fontsizes } from '@/Standars';

export const BenefitCard = () => {
  return (
    <div className='w-80 h-80 p-8 bg-green-200 grid space-y-8'>
      <h3
        className={`w-full text-right ${fontsizes.titles} font-bold text-app-grey-20`}
      >
        01
      </h3>
      <div className={`flex flex-col justify-around ${fontsizes.general}`}>
        <p className='bg-slate-200'>lorem 1</p>
        <p className='bg-slate-200'>lorem 2</p>
      </div>
      <h3 className='bg-red-200 text-right'>BenefitBottomDiv</h3>
    </div>
  );
};
