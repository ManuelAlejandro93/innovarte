import { AppButton } from '@/Components';
import { fontsizes, loremTitle, loremGeneral } from '@/Standars';
import { SingleSectionHeaderInterface } from '@/Interfaces';

export const SingleSectionHeader = ({
  title,
  subtitle
}: SingleSectionHeaderInterface) => {
  return (
    <>
      <h2 className={`${fontsizes.titles} text-app-grey-20 mb-1 font-semibold`}>
        {title ?? loremTitle}
      </h2>
      <div className='grid space-y-4 md:flex md:flex-row md:justify-between'>
        <h3 className={`${fontsizes.general} text-app-grey-30 w-2/3`}>
          {subtitle ?? loremGeneral}
        </h3>
        <span className='sm:flex sm:flex-col sm:justify-end'>
          <AppButton text={'View All'}></AppButton>
        </span>
      </div>
      <div className='mt-8 md:mt-6 lg:mt-8' />
    </>
  );
};
