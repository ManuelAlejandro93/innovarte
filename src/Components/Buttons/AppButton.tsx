import { ReactNode } from 'react';
import { fontsizes } from '@/Standars';
import { grey_15 } from '@/UI';
import { AppButtonInterface } from '@/Interfaces';

export const AppButton = ({
  className,
  text,
  backgroud_color
}: AppButtonInterface): ReactNode => {
  return (
    <a
      href='#'
      className={`${backgroud_color ? backgroud_color : 'bg-app-white-95'} ${
        fontsizes.general
      } text-${grey_15} rounded-lg p-4 md:p-2 lg:p-4 ${className}`}
    >
      {text}
    </a>
  );
};
