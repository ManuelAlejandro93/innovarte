import { SingleSection, AppButton, BenefitGrid } from '@/Components';
import { loremGeneral } from '@/Standars';

export const Benefits = () => {
  return (
    <SingleSection
      title={'Benefits'}
      subtitle={loremGeneral}
      viewAllButton={<AppButton text={'View All'} />}
    >
      <BenefitGrid></BenefitGrid>
    </SingleSection>
  );
};
