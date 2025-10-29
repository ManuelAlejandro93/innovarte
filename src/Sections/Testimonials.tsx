import {
  SingleSection,
  AppToggleButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';

import { loremGeneral } from '@/Standars';
import { yellowButtonsHover } from '@/UI';
import {
  testimonials,
  testimonial_header_data as testimonial_header,
  testimonialsID
} from '@/Data';

export const Testimonials = () => {
  return (
    <SingleSection
      sectionId={testimonialsID}
      title={testimonial_header.title ?? 'Testimonials'}
      subtitle={testimonial_header.description ?? loremGeneral}
      viewAllButton={
        <AppToggleButton
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
