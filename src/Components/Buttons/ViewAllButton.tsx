import { fontsizes } from '@/Standars';
import { grey_15 } from '@/UI';
import { ReactNode } from 'react';

interface ViewAllReadAllButton {
  className?: String;
  text: String;
}

export const AppButton = ({
  className,
  text
}: ViewAllReadAllButton): ReactNode => {
  return (
    <a
      href='#'
      className={`bg-app-white-95 ${fontsizes.general} text-${grey_15} rounded-lg p-4 md:p-2 lg:p-4 ${className}`}
    >
      {text}
    </a>
  );
};
