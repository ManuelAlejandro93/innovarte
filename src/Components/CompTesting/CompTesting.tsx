import {
  SingleSection,
  AppButton,
  OurCoursSingleCard,
  OurCoursesGrid
} from '@/Components';
import { loremGeneral } from '@/Standars';
import { courseSectionData as courses } from '@/Data';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Our Courses'}
        subtitle={loremGeneral}
        viewAllButton={<AppButton text={'View All'} />}
      >
        <OurCoursesGrid>
          {courses.map((singleCourse, i) => (
            <OurCoursSingleCard
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
    </div>
  );
};
