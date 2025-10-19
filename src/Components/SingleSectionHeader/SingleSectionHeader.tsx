import { fontsizes, loremTitle, loremGeneral } from '@/Standars';
import { SingleSectionHeaderInterface } from '@/Interfaces';

export const SingleSectionHeader = ({
  title,
  subtitle,
  viewAllButton,
  className
}: SingleSectionHeaderInterface) => {
  return (
    <div className={`${className}`}>
      <h2
        className={`${fontsizes.titles} text-app-blue-50  mb-1 font-semibold`}
      >
        {title ?? loremTitle}
      </h2>
      <div className='grid space-y-4 md:flex md:flex-row md:justify-between'>
        <h3 className={`${fontsizes.general} text-app-grey-30 w-2/3`}>
          {subtitle ?? loremGeneral}
        </h3>
        {viewAllButton ? (
          <span className='md:flex md:flex-col md:justify-end'>
            {viewAllButton}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className='mt-8 md:mt-6 lg:mt-8' />
    </div>
  );
};
