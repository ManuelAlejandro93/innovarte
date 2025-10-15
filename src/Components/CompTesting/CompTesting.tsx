import { loremGeneral, fontsizes } from '@/Standars';
import { SingleSection, AppButton } from '@/Components';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Pricing'}
        subtitle={loremGeneral}
      >
        {/* //!Container */}
        <div className='flex p-4 md:p-6 lg:p-8 xl:p-12 gap-6 md:gap-8 lg:gap-10 xl:gap-14 flex-col md:flex-row'>
          {/* //! 1 single card */}
          <div className='w-full h-fit grid gap-4'>
            <AppButton
              text={'Contado'}
              className={`bg-app-orange-90 text-center ${fontsizes.cardTitles} font-semibold`}
            ></AppButton>
          </div>
          {/* //! 1 single card */}
        </div>
        {/* //!Container */}
      </SingleSection>
    </div>
  );
};
