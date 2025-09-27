import { SingleSection } from '@/Components';
import { loremGeneral } from '@/Standars';

export const CompTesting = () => {
  return (
    <div>
      <span className='text-red-500'>Testing Component</span>
      <SingleSection
        title={'Benefits'}
        subtitle={loremGeneral}
      >
        <h3>Contenido de la sección.</h3>
      </SingleSection>
    </div>
  );
};
