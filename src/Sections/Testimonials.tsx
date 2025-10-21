import {
  SingleSection,
  AppButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';

import { loremGeneral } from '@/Standars';
import { yellowButtonsHover } from '@/UI';
import {
  testimonials,
  testimonial_header_data as testimonial_header
} from '@/Data';

export const Testimonials = () => {
  return (
    <SingleSection
      title={testimonial_header.title ?? 'Testimonials'}
      subtitle={testimonial_header.description ?? loremGeneral}
      viewAllButton={
        <AppButton
          text={'Ver todos'}
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
