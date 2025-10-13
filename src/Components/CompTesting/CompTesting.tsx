import {
  SingleSection,
  AppButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';
import { loremGeneral } from '@/Standars';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Testimonials'}
        subtitle={loremGeneral}
        viewAllButton={<AppButton text={'View All'} />}
      >
        <TestimonialGrid>
          <TestimonialSingleCard />
        </TestimonialGrid>
      </SingleSection>
    </div>
  );
};
