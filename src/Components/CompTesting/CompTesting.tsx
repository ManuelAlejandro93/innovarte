import { loremGeneral, fontsizes } from '@/Standars';
import { SingleSection } from '@/Components';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Pricing'}
        subtitle={loremGeneral}
      >
        {/* //!Container */}
        <div className='bg-yellow-200 flex p-4 md:p-6 lg:p-8 xl:p-12 gap-6 md:gap-8 lg:gap-10 xl:gap-14 flex-col md:flex-row'>
          <div className='w-full h-fit grid gap-4 bg-orange-400'>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
          </div>
          <div className='w-full h-fit grid gap-4 bg-orange-400'>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
            <h1 className={`${fontsizes.general} text-center`}>oee</h1>
          </div>
        </div>
        {/* //!Container */}
      </SingleSection>
    </div>
  );
};
