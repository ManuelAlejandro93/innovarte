import { fontsizes } from '@/Standars';
import { ClassTextInterface } from '@/Interfaces';

export const AppGeneralText = ({ className, text }: ClassTextInterface) => {
  return (
    <p className={`text-app-grey-30 ${fontsizes.general} ${className}`}>
      {text ??
        'Fit your coursework around your existing commiments and obligations.'}
    </p>
  );
};
