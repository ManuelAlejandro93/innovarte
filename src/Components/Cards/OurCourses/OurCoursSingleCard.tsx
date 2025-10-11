import { OurCourseBadget } from '@/Components';
import { fontsizes } from '@/Standars';
import { OurCoursSingleCardInterface } from '@/Interfaces';

export const OurCoursSingleCard = ({
  description,
  url,
  texto1,
  texto2
}: OurCoursSingleCardInterface) => {
  return (
    <div className='bg-red-200 w-full h-96 lg:h-[520px] p-4 md:p-6 lg:p-8 xl:p-12 grid gap-4 md:gap-6 lg:gap-4'>
      <img
        src={url}
        alt={description}
        className='w-full h-auto 2xl:h-[300px] bg-slate-500 rounded-lg'
      />
      {/* //! */}
      <div className='OurCoursesBadgeteContainer flex justify-between items-center flex-col md:flex-row'>
        <div className={`divLeft ${fontsizes.general} flex`}>
          <OurCourseBadget text={texto1 ?? '4 Weeks'} />
          <OurCourseBadget
            text={texto2 ?? '4 Weeks'}
            className='ml-4'
          />
        </div>
        <h4>By Henrick Tommas.</h4>
      </div>
      {/* //! */}
    </div>
  );
};
