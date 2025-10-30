import { useDispatch, useSelector } from 'react-redux';
import { RootState, onClickCourseToggleButton } from '@/Store';

import {
  SingleSection,
  AppToggleButton,
  OurCoursesGrid,
  OurCourseSingleCard
} from '@/Components';
import { loremGeneral } from '@/Standars';
import { our_courses_header_data as courses_header, coursesID } from '@/Data';
import { yellowButtonsHover } from '@/UI';

export const OurCourses = () => {
  const {
    testionialToggleButtonText: courseToggleButtonText,
    testionialItemOnLayout: courseItemOnLayout
  } = useSelector((state: RootState) => state.courseReducer);
  const dispatch = useDispatch();

  return (
    <SingleSection
      sectionId={coursesID}
      title={courses_header.title ?? 'Our Courses'}
      subtitle={courses_header.description ?? loremGeneral}
      viewAllButton={
        <AppToggleButton
          text={courseToggleButtonText}
          className={yellowButtonsHover}
          toogleFunction={() => dispatch(onClickCourseToggleButton())}
        />
      }
    >
      <OurCoursesGrid>
        {courseItemOnLayout.map((singleCourse, i) => (
          <OurCourseSingleCard
            key={`${i}_${singleCourse.url}`}
            img_description={singleCourse.img_description}
            url={singleCourse.url}
            area={singleCourse.area}
            intensity={singleCourse.intensity}
            teacher={singleCourse.teacher}
            title={singleCourse.title}
            subtitle={singleCourse.subtitle}
          />
        ))}
      </OurCoursesGrid>
    </SingleSection>
  );
};
//
