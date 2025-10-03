import { BenefitCard } from '@/Components';
import { BenefitInfo } from '@/Data';

export const BenefitGrid = () => {
  return (
    <div className='w-full grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-6'>
      {BenefitInfo.map((singleBenefit, i) => (
        <BenefitCard
          key={`${i + 1}_${singleBenefit.benefitTitle}`}
          benefitNumber={i + 1}
          benefitTitle={singleBenefit.benefitTitle}
          benefitDescription={singleBenefit.benefitDescription}
        ></BenefitCard>
      ))}
    </div>
  );
};
