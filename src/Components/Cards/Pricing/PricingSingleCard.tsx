import { AppButton } from '@/Components';
import { fontsizes } from '@/Standars';
import { ClassNameInterface } from '@/Interfaces';

export const PricingSingleCard = ({ className }: ClassNameInterface) => {
  return (
    <div className='w-full h-fit grid gap-4'>
      <AppButton
        text={'Contado'}
        className={`bg-app-orange-90 text-center ${fontsizes.cardTitles} font- ${className}`}
      ></AppButton>
    </div>
  );
};
