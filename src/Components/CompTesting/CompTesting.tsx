import { SingleSection, AppButton, BenefitGrid } from '@/Components';
import { loremGeneral } from '@/Standars';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Our Courses'}
        subtitle={loremGeneral}
        viewAllButton={<AppButton text={'View All'} />}
      >
        <></>
      </SingleSection>
    </div>
  );
};
