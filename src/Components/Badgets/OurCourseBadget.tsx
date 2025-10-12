import { fontsizes } from '@/Standars';
import { OurCourseBadgetInterface } from '@/Interfaces';

export const OurCourseBadget = ({
  text,
  className
}: OurCourseBadgetInterface) => {
  return (
    <h4
      className={`${fontsizes.general} text-app-grey-30 border-2 border-app-grey-70 rounded-md p-2 md:px-[3px] md:py-2 lg:p-1 xl:p-4 ${className}`}
    >
      {text ?? '4 Weeks'}
    </h4>
  );
};
