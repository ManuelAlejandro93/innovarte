import { OurCourseBadget } from '@/Components';
import { fontsizes, loremGeneral } from '@/Standars';
import { OurCoursSingleCardInterface } from '@/Interfaces';

export const OurCoursSingleCard = ({
  area,
  description,
  intensity,
  teacher,
  url
}: OurCoursSingleCardInterface) => {
  return (
    <div className='200 w-full h-96 lg:h-[520px] p-4 md:p-6 lg:p-8 xl:p-12 grid gap-4 md:gap-6 lg:gap-4'>
      <img
        src={url}
        alt={description}
        className='w-full h-auto 2xl:h-[300px] bg-slate-500 rounded-lg'
      />
      <div className='OurCoursesBadgeteContainer flex justify-between  flex-col md:flex-row md:items-center'>
        <div className={`divLeft ${fontsizes.general} flex`}>
          <OurCourseBadget text={intensity ?? '4 Weeks'} />
          <OurCourseBadget
            text={area ?? 'Physics'}
            className='ml-4'
          />
        </div>
        <h4 className={`${fontsizes.general} text-app-grey-15`}>
          By {teacher ?? 'Henrick Tommas.'}
        </h4>
      </div>
      {/* <p className={`${fontsizes.general}`}>{loremGeneral}</p> */}
    </div>
  );
};
