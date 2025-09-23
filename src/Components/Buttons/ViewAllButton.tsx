import { fontsizes } from '@/Standars';
import { grey_15 } from '@/UI';
import { ReactNode } from 'react';

interface ViewAllReadAllButton {
  isViewAllButton: boolean;
}

export const ViewAllReadFullButton = ({
  isViewAllButton
}: ViewAllReadAllButton): ReactNode => {
  return (
    <a
      href=''
      className={`bg-app-white-95 ${fontsizes.general} text-${grey_15} rounded-lg p-4`}
    >
      {isViewAllButton ? 'View All' : 'Read Full Story'}
    </a>
  );
};
