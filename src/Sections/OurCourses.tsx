import {
  SingleSection,
  AppButton,
  OurCoursesGrid,
  OurCourseSingleCard
} from '@/Components';
import { loremGeneral } from '@/Standars';
import {
  courseSectionData as courses,
  our_courses_header_data as courses_header
} from '@/Data';
import { yellowButtonsHover } from '@/UI';

export const OurCourses = () => {
  return (
    <SingleSection
      title={courses_header.title ?? 'Our Courses'}
      subtitle={courses_header.description ?? loremGeneral}
      viewAllButton={
        <AppButton
          text={'Ver Todos'}
          className={yellowButtonsHover}
        />
      }
    >
      <OurCoursesGrid>
        {courses.map((singleCourse, i) => (
          <OurCourseSingleCard
            key={`${i}_${singleCourse.url}`}
            description={singleCourse.description}
            url={singleCourse.url}
            area={singleCourse.area}
            intensity={singleCourse.intensity}
            teacher={singleCourse.teacher}
          />
        ))}
      </OurCoursesGrid>
    </SingleSection>
  );
};
//
