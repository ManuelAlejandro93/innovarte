import { OurCourseBadget, AppButton } from '@/Components';
import { fontsizes } from '@/Standars';
import { OurCoursSingleCardInterface } from '@/Interfaces';

export const OurCourseSingleCard = ({
  area,
  description,
  intensity,
  teacher,
  url
}: OurCoursSingleCardInterface) => {
  return (
    <div className='rounded-lg border-2 border-app-white-90 w-full h-[440px] lg:h-[560px] xl:h-[600px] p-4 md:p-6 lg:p-8 xl:p-12 grid gap-4 md:gap-6 lg:gap-4'>
      <img
        src={url}
        alt={description}
        className='w-full h-auto 2xl:h-[300px] rounded-lg'
      />
      <div className='OurCoursesBadgeteContainer flex justify-between  flex-col md:flex-row md:items-center'>
        <div className={`divLeft ${fontsizes.general} flex`}>
          <OurCourseBadget text={intensity ?? '4 Weeks'} />
          <OurCourseBadget
            text={area ?? 'Physics'}
            className='ml-4'
          />
        </div>
        <h4
          className={`${fontsizes.general} text-app-grey-15 font-medium mt-2 md:mt-0`}
        >
          By {teacher ?? 'Henrick Tommas.'}
        </h4>
      </div>
      <div>
        <p className={`text-app-grey-20 font-semibold ${fontsizes.cardTitles}`}>
          {'Flexible Learning Schedule'}
        </p>
        <p className={`text-app-grey-30 ${fontsizes.general}`}>
          {
            'Fit your coursework around your existing commiments and obligations.'
          }
        </p>
      </div>
      <AppButton
        text={'Get it now'}
        className='text-center'
      />
    </div>
  );
};
