import { AppButtonInterface as IcfesNavigationButtonInterface } from '@/Interfaces';
import { fontsizes } from '@/Standars';
import { grey_15 } from '@/UI';

export const IcfesNavigationButton = ({
  className,
  text,
  backgroud_color,
  url
}: IcfesNavigationButtonInterface) => {
  return (
    <a
      href={`${url ?? 'https://www.icfes.gov.co/'}`}
      target='_blank'
      className={`${backgroud_color ? backgroud_color : 'bg-app-yellow-80'} ${
        fontsizes.general
      } text-${grey_15} rounded-lg p-4 md:p-2 lg:p-4 hover:cursor-pointer ${className}`}
    >
      {text}
    </a>
  );
};
