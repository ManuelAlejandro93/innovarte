import {
  SingleSection,
  AppButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';

import { loremGeneral } from '@/Standars';

export const Testimonials = () => {
  return (
    <SingleSection
      title={'Testimonials'}
      subtitle={loremGeneral}
      viewAllButton={<AppButton text={'View All'} />}
    >
      <TestimonialGrid>
        <TestimonialSingleCard />
        <TestimonialSingleCard />
        <TestimonialSingleCard />
        <TestimonialSingleCard />
      </TestimonialGrid>
    </SingleSection>
  );
};
