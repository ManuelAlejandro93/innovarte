import { Check as CheckIcon, X as XIcon } from 'lucide-react';
import { AppButton, AppGeneralText } from '@/Components';
import { ClassNameInterface } from '@/Interfaces';
import { fontsizes } from '@/Standars';

export const PricingSingleCard = ({ className }: ClassNameInterface) => {
  return (
    <div
      className={`w-full h-fit grid gap-4 rounded-3xl border-2 border-app-white-90 p-4 md:p-6 lg:p-8 xl:p-12 hover:bg-app-white-95 ${className}`}
    >
      <AppButton
        text={'Contado'}
        className={`text-center hover:bg-app-blue-75 hover:text-white`}
        backgroud_color={'bg-app-blue-90'}
      />

      <div className='flex justify-center items-baseline'>
        <p
          className={`${fontsizes.titles} text-center font-bold max-h-max text-app-blue-50`}
        >
          300K
        </p>
        <AppGeneralText text='/total' />
      </div>
      <AppGeneralText
        text='Condiciones de pago'
        className='font-bold text-center uppercase text-yellow-600'
      />
      <div className='flex justify-center items-center'>
        <CheckIcon className='mr-2 text-green-500' />
        <AppGeneralText
          text='Beneficio 1'
          className='text-center'
        />
      </div>
      <div className='flex justify-center items-center'>
        <XIcon className='mr-2 text-red-500' />
        <AppGeneralText
          text='Beneficio 2'
          className='text-center'
        />
      </div>
      <div className='flex justify-center items-center'>
        <CheckIcon className='mr-2 text-green-500' />
        <AppGeneralText
          text='Beneficio 1'
          className='text-center'
        />
      </div>
      <div className='flex justify-center items-center'>
        <XIcon className='mr-2 text-red-500' />
        <AppGeneralText
          text='Beneficio 2'
          className='text-center'
        />
      </div>
      <div className='flex justify-center items-center'>
        <CheckIcon className='mr-2 text-green-500' />
        <AppGeneralText
          text='Beneficio 1'
          className='text-center'
        />
      </div>
      <div className='flex justify-center items-center'>
        <XIcon className='mr-2 text-red-500' />
        <AppGeneralText
          text='Beneficio 2'
          className='text-center'
        />
      </div>
    </div>
  );
};
