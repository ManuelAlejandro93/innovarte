import { fontsizes } from '@/Standars';
import { grey_15 } from '@/UI';
export const ViewAllButton = () => {
  return (
    <a
      href=''
      className={`bg-app-white-95 ${fontsizes.general} text-${grey_15} rounded-lg p-4`}
    >
      View All
    </a>
  );
};
