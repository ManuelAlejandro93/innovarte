import {
  SingleSection,
  AppButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';

import { loremGeneral } from '@/Standars';
import { yellowButtonsHover } from '@/UI';

export const Testimonials = () => {
  return (
    <SingleSection
      title={'Testimonials'}
      subtitle={loremGeneral}
      viewAllButton={
        <AppButton
          text={'View All'}
          className={yellowButtonsHover}
        />
      }
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
