import { SingleSection, AppButton } from '@/Components';
import { loremGeneral } from '@/Standars';
import { courseSectionImages as courses } from '@/Data';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Our Courses'}
        subtitle={loremGeneral}
        viewAllButton={<AppButton text={'View All'} />}
      >
        {/* //!"Our Courses" Grid */}
        <div className='grid grid-cols-1 grid-rows-6 gap-6 md:grid-cols-2 md:grid-rows-3 md:gap-4 lg:gap-6'>
          {/* //! Our Course Card */}
          {courses.map((singleCourse, i) => (
            <div
              className=' w-full h-96 lg:h-[520px] p-4 md:p-6 lg:p-8 xl:p-12'
              key={`${singleCourse}_${i}`}
            >
              <img
                src={singleCourse.url}
                alt={singleCourse.description}
              />
            </div>
          ))}
          {/* //! Our Course Card */}
        </div>
        {/* //!"Our Courses" Grid */}
      </SingleSection>
    </div>
  );
};

//Antes de empezar a cambiar la card individual.
