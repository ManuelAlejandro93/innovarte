import { OurCourseBadget } from '@/Components';
import { fontsizes } from '@/Standars';

interface OurCoursSingleCardInterface {
  url: string;
  description: string;
}

export const OurCoursSingleCard = ({
  description,
  url
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
          <OurCourseBadget text='4 Weeks' />
          <OurCourseBadget
            text='4 Weeks'
            className='ml-4'
          />
        </div>
        <h4>By Henrick Tommas.</h4>
      </div>
      {/* //! */}
    </div>
  );
};
