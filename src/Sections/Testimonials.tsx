import {
  SingleSection,
  AppButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';

import { loremGeneral } from '@/Standars';
import { yellowButtonsHover } from '@/UI';
import { testimonials } from '@/Data';

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
        {testimonials.map((user, i) => (
          <TestimonialSingleCard
            key={`${i}_${user.testimonial_user_photo}`}
            testimonial_user_career={user.testimonial_user_career}
            testimonial_user_name={user.testimonial_user_name}
            testimonial_user_photo={user.testimonial_user_photo}
            testimonial={user.testimonial}
          />
        ))}
      </TestimonialGrid>
    </SingleSection>
  );
};
