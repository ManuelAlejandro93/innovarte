import { SingleSectionHeader } from '@/Components';
import { loremGeneral } from '@/Standars';

export const SingleSection = () => {
  return (
    <>
      <SingleSectionHeader
        title={'Benefits'}
        subtitle={loremGeneral}
      ></SingleSectionHeader>
      <h3>Cuerpo de la sección.</h3>
    </>
  );
};
