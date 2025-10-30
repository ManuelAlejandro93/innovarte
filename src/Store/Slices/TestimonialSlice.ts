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
  testionialItemOnLayout: initialTestimonialItemOnLayout,
  testionialToggleButtonText: 'Ver más'
};

const CourseSlice = createSlice({
  name: 'testimonial-state',
  initialState,
  reducers: {
    onClickTestimonialToggleButton: (state: TestimonialStateInterface) => {
      if (
        state.testionialItemOnLayout.length ===
        minTestimonialDisplayedItemAmount
      ) {
        state.testionialItemOnLayout = testimonialTotalData;
        state.testionialToggleButtonText = 'Ver Menos';
      } else {
        state.testionialItemOnLayout = initialTestimonialItemOnLayout;
        state.testionialToggleButtonText = 'Ver Más';
      }
    }
  }
});

export const { onClickTestimonialToggleButton } = CourseSlice.actions;
export const testimonialReducer = CourseSlice.reducer;
