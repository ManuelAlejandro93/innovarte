import { fontsizes } from '@/Standars';
import { OurCourseBadgetInterface } from '@/Interfaces';

export const OurCourseBadget = ({
  text,
  className
}: OurCourseBadgetInterface) => {
  return (
    <h4
      className={`${fontsizes.general} text-app-grey-30 border-2 border-app-white-95 rounded-md p-4 ${className}`}
    >
      {text ?? '4 Weeks'}
    </h4>
  );
};
