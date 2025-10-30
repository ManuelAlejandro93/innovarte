import { useDispatch, useSelector } from 'react-redux';
import { RootState, onClickTestimonialToggleButton } from '@/Store';

import {
  SingleSection,
  AppToggleButton,
  TestimonialGrid,
  TestimonialSingleCard
} from '@/Components';

import { loremGeneral } from '@/Standars';
import { yellowButtonsHover } from '@/UI';
import {
  testimonial_header_data as testimonial_header,
  testimonialsID
} from '@/Data';

export const Testimonials = () => {
  const { testimonialItemOnLayout, testimonialToggleButtonText } = useSelector(
    (state: RootState) => state.testimonialReducer
  );
  const dispatch = useDispatch();

  return (
    <SingleSection
      sectionId={testimonialsID}
      title={testimonial_header.title ?? 'Testimonials'}
      subtitle={testimonial_header.description ?? loremGeneral}
      viewAllButton={
        <AppToggleButton
          text={testimonialToggleButtonText}
          className={yellowButtonsHover}
          toogleFunction={() => dispatch(onClickTestimonialToggleButton())}
        />
      }
    >
      <TestimonialGrid>
        {testimonialItemOnLayout.map((user, i) => (
          <TestimonialSingleCard
            key={`${i}_${user.testimonial_user_photo}`}
            testimonial_user_career={user.testimonial_user_career}
            testimonial_user_name={user.testimonial_user_name}
            testimonial_user_photo={user.testimonial_user_photo}
            testimonial={user.testimonial}
            fullTestimonial={user.fullTestimonial}
          />
        ))}
      </TestimonialGrid>
    </SingleSection>
  );
};
