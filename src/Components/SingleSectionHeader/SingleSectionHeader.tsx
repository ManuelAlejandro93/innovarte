import { AppButton } from '@/Components';
import { fontsizes } from '@/Standars';

interface SingleSectionInterface {
  title: String;
  subtitle: String;
}

const loremSubtitle =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit debitis sequi minima itaque hic sunt odit officia dolorem eveniet iste perspiciatis soluta voluptatum temporibus sapiente nobis perferendis veritatis, voluptates labore.';

export const SingleSectionHeader = ({
  title,
  subtitle
}: SingleSectionInterface) => {
  return (
    <div>
      <h2 className={`${fontsizes.titles} text-app-grey-20 mb-1 font-semibold`}>
        {title ?? 'Lorem Title'}
      </h2>
      <div className='grid space-y-4 sm:flex sm:flex-row sm:justify-between'>
        <h3 className={`${fontsizes.general} text-app-grey-30 w-2/3`}>
          {subtitle ?? loremSubtitle}
        </h3>
        <span className='sm:flex sm:flex-col sm:justify-end'>
          <AppButton text={'View All'}></AppButton>
        </span>
      </div>
    </div>
  );
};
