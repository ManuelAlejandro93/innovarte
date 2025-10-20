import {
  SingleSection,
  AppButton,
  OurCoursesGrid,
  OurCourseSingleCard
} from '@/Components';
import { loremGeneral } from '@/Standars';
import { courseSectionData as courses } from '@/Data';

export const OurCourses = () => {
  return (
    <SingleSection
      title={'Our Courses'}
      subtitle={loremGeneral}
      viewAllButton={<AppButton text={'View All'} />}
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
