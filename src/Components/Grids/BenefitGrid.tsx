import { BenefitCard } from '@/Components';

export const BenefitGrid = () => {
  return (
    <div className='w-full grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-6'>
      <BenefitCard></BenefitCard>
      <BenefitCard></BenefitCard>
      <BenefitCard></BenefitCard>
      <BenefitCard></BenefitCard>
      <BenefitCard></BenefitCard>
      <BenefitCard></BenefitCard>
    </div>
  );
};
