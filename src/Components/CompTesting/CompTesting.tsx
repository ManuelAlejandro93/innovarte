import { SingleSection, AppButton, TestimonialGrid } from '@/Components';
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
          <h1>H1 Test</h1>
          <h1>H1 Test</h1>
          <h1>H1 Test</h1>
          <h1>H1 Test</h1>
          <h1>H1 Test</h1>
          <h1>H1 Test</h1>
        </TestimonialGrid>
      </SingleSection>
    </div>
  );
};
