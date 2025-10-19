import { fontsizes } from '@/Standars';
import { FooterAnchorInterface } from '@/Interfaces';

export const FooterAnchor = ({
  className,
  text,
  text_color
}: FooterAnchorInterface) => {
  return (
    <a
      href='#'
      className={`${text_color ? text_color : 'text-app-grey-30'} ${
        fontsizes.general
      } ${className}`}
    >
      {text ?? 'Click on me.'}
    </a>
  );
};
