import { fontsizes } from '@/Standars';
import { FooterAnchorInterface } from '@/Interfaces';

export const FooterAnchor = ({
  className,
  text,
  text_color,
  navigationID
}: FooterAnchorInterface) => {
  return (
    <a
      href={`#${navigationID}`}
      className={`${
        text_color ? text_color : 'text-app-grey-30'
      } hover:text-app-blue-50 hover:underline ${
        fontsizes.general
      } ${className}`}
    >
      {text ?? 'Click on me.'}
    </a>
  );
};
