import { createSlice } from '@reduxjs/toolkit';
import { courseSectionData as courseTotalItems } from '@/Data';
import { CourseStateInterface, CourseSectionDataInterface } from '@/Interfaces';

const minCourseDisplayedItemAmount: number = 6;
const initialCourseItemOnLayout: CourseSectionDataInterface[] =
  courseTotalItems.slice(0, minCourseDisplayedItemAmount);

const initialState: CourseStateInterface = {
  courseItemOnLayout: initialCourseItemOnLayout,
  courseToggleButtonText: 'Ver más'
};

const CourseSlice = createSlice({
  name: 'course-state',
  initialState,
  reducers: {
    onClickCourseToggleButton: (state: CourseStateInterface) => {
      if (state.courseItemOnLayout.length === minCourseDisplayedItemAmount) {
        state.courseItemOnLayout = courseTotalItems;
        state.courseToggleButtonText = 'Ver Menos';
      } else {
        state.courseItemOnLayout = initialCourseItemOnLayout;
        state.courseToggleButtonText = 'Ver Más';
      }
    }
  }
});

export const { onClickCourseToggleButton } = CourseSlice.actions;
export const courseReducer = CourseSlice.reducer;
