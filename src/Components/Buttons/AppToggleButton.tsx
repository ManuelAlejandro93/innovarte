import { fontsizes } from '@/Standars';
import { grey_15 } from '@/UI';
import { AppToggleButtonInterface } from '@/Interfaces';

export const AppToggleButton = ({
  className,
  text,
  backgroud_color
}: AppToggleButtonInterface) => {
  return (
    <a
      className={`${backgroud_color ? backgroud_color : 'bg-app-yellow-80'} ${
        fontsizes.general
      } text-${grey_15} rounded-lg p-4 md:p-2 lg:p-4 hover:cursor-pointer ${className}`}
    >
      {text}
    </a>
  );
};
