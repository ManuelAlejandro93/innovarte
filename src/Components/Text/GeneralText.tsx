import { fontsizes } from '@/Standars';
import { GeneralTextInterface } from '@/Interfaces';

export const AppGeneralText = ({
  className,
  text,
  text_color
}: GeneralTextInterface) => {
  return (
    <p
      className={`${text_color ? text_color : 'text-app-grey-30'} ${
        fontsizes.general
      } ${className}`}
    >
      {text ??
        'Fit your coursework around your existing commiments and obligations.'}
    </p>
  );
};
