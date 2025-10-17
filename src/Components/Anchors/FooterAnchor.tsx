import { fontsizes } from '@/Standars';
import { ClassTextInterface } from '@/Interfaces';

export const FooterAnchor = ({ className, text }: ClassTextInterface) => {
  return (
    <a
      href='#'
      className={`text-app-grey-30 ${fontsizes.general} ${className}`}
    >
      {text ?? 'Click on me.'}
    </a>
  );
};
