import { createSlice } from '@reduxjs/toolkit';
import { courseSectionData as courseTotalItems } from '@/Data';
import { CourseStateInterface, CourseSectionDataInterface } from '@/Interfaces';

const minCourseDisplayedItemAmount: number = 6;
const initialCourseItemOnLayout: CourseSectionDataInterface[] =
  courseTotalItems.slice(0, minCourseDisplayedItemAmount);

const initialState: CourseStateInterface = {
  testionialItemOnLayout: initialCourseItemOnLayout,
  testionialToggleButtonText: 'Ver más'
};

const CourseSlice = createSlice({
  name: 'course-state',
  initialState,
  reducers: {
    onClickCourseToggleButton: (state: CourseStateInterface) => {
      if (
        state.testionialItemOnLayout.length === minCourseDisplayedItemAmount
      ) {
        state.testionialItemOnLayout = courseTotalItems;
        state.testionialToggleButtonText = 'Ver Menos';
      } else {
        state.testionialItemOnLayout = initialCourseItemOnLayout;
        state.testionialToggleButtonText = 'Ver Más';
      }
    }
  }
});

export const { onClickCourseToggleButton } = CourseSlice.actions;
export const courseReducer = CourseSlice.reducer;
