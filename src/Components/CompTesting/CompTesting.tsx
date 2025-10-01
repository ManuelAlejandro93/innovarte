import { AppButton, SingleSection, BenefitGrid } from '@/Components';
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
        <BenefitGrid></BenefitGrid>
      </SingleSection>
    </div>
  );
};
