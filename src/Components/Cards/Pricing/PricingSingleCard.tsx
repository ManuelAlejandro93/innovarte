import { AppButton, AppGeneralText } from '@/Components';
import { ClassNameInterface } from '@/Interfaces';
import { fontsizes } from '@/Standars';

export const PricingSingleCard = ({ className }: ClassNameInterface) => {
  return (
    <div className={`w-full h-fit grid gap-4 ${className}`}>
      <AppButton
        text={'Contado'}
        className={`text-center`}
        backgroud_color={'bg-app-orange-90'}
      />
      <div>
        <div className='flex justify-center items-baseline'>
          <p
            className={`${fontsizes.titles} text-center font-bold text-app-grey-20 max-h-max`}
          >
            300K
          </p>
          <AppGeneralText text='/total' />
        </div>
      </div>
    </div>
  );
};
