import { createSlice } from '@reduxjs/toolkit';
import { testimonials as testimonialTotalData } from '@/Data';
import {
  TestimonialStateInterface,
  TestimonialSingleCardDataInterface
} from '@/Interfaces';

const minTestimonialDisplayedItemAmount: number = 4;
const initialTestimonialItemOnLayout: TestimonialSingleCardDataInterface[] =
  testimonialTotalData.slice(0, minTestimonialDisplayedItemAmount);

const initialState: TestimonialStateInterface = {
  testimonialItemOnLayout: initialTestimonialItemOnLayout,
  testimonialToggleButtonText: 'Ver Todos'
};

const CourseSlice = createSlice({
  name: 'testimonial-state',
  initialState,
  reducers: {
    onClickTestimonialToggleButton: (state: TestimonialStateInterface) => {
      if (
        state.testimonialItemOnLayout.length ===
        minTestimonialDisplayedItemAmount
      ) {
        state.testimonialItemOnLayout = testimonialTotalData;
        state.testimonialToggleButtonText = 'Ver Menos';
      } else {
        state.testimonialItemOnLayout = initialTestimonialItemOnLayout;
        state.testimonialToggleButtonText = 'Ver Todos';
      }
    }
  }
});

export const { onClickTestimonialToggleButton } = CourseSlice.actions;
export const testimonialReducer = CourseSlice.reducer;
