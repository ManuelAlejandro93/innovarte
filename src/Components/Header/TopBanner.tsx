import { fontsizes } from '@/Standars';

export const TopBanner = () => {
  return (
    <div
      className={`flex w-full bg-app-blue-50 rounded-sm p-2 ${fontsizes.general}`}
    >
      <div className='w-full flex items-center text-app-white-99 justify-center'>
        ⭐ Preparate con Nosotros y entra a la U ⭐
      </div>
    </div>
  );
};
