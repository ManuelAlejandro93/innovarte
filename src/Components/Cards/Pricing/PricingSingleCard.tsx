import { AppButton } from '@/Components';
import { ClassNameInterface } from '@/Interfaces';

export const PricingSingleCard = ({ className }: ClassNameInterface) => {
  return (
    <div className={`w-full h-fit grid gap-4 ${className}`}>
      <AppButton
        text={'Contado'}
        className={`text-center bg-app-orange-90`}
      ></AppButton>
    </div>
  );
};
