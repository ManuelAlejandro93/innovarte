import { AppButton } from '@/Components';
import { fontsizes } from '@/Standars';

export const SingleSectionHeader = () => {
  return (
    <div>
      <h2 className={`${fontsizes.titles} text-app-grey-20 mb-1 font-semibold`}>
        Benefits
      </h2>
      <div className='flex justify-between items-center'>
        <h3 className={`${fontsizes.general} text-app-grey-30 w-2/3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam perspiciatis cumque. Deserunt earum temporibus, quaerat
          quisquam, dolores fuga laborum perferendis officia similique ipsum
          voluptatem alias nulla architecto iste tempore.
        </h3>
        <AppButton text={'View All'}></AppButton>
      </div>
    </div>
  );
};
