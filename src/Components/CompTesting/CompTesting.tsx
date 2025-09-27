import { SingleSectionHeader } from '@/Components';
import { loremGeneral } from '@/Standars';
export const CompTesting = () => {
  return (
    <div>
      <span className='text-red-500'>Testing Component</span>
      <SingleSectionHeader
        title={'Benefits'}
        subtitle={loremGeneral}
      ></SingleSectionHeader>
    </div>
  );
};
