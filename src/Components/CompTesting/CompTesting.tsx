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
        {/* //!"Our Courses" Grid */}
        <div className='grid grid-cols-1 grid-rows-6 gap-6 md:grid-cols-2 md:grid-rows-3 md:gap-4 lg:gap-6'>
          <div className='bg-red-300 w-full h-96 lg:h-[520px]'></div>
        </div>
        {/* //!"Our Courses" Grid */}
      </SingleSection>
    </div>
  );
};
