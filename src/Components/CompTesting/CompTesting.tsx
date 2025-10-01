import { AppButton, SingleSection, BenefitCard } from '@/Components';
import { loremGeneral } from '@/Standars';

export const CompTesting = () => {
  return (
    <div>
      <span className='text-red-500'>Testing Component</span>
      <SingleSection
        title={'Benefits'}
        subtitle={loremGeneral}
        viewAllButton={<AppButton text={'View All'} />}
      >
        <div className='grid grid-cols-3'>
          <BenefitCard></BenefitCard>
          <BenefitCard></BenefitCard>
          <BenefitCard></BenefitCard>
        </div>
      </SingleSection>
    </div>
  );
};
