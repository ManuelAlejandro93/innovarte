import { loremGeneral } from '@/Standars';
import { SingleSection } from '@/Components';

export const CompTesting = () => {
  return (
    <div>
      <p className='text-red-500 text-3xl'>---In Process Component---</p>
      <SingleSection
        title={'Pricing'}
        subtitle={loremGeneral}
      >
        <></>
      </SingleSection>
    </div>
  );
};
