import { loremGeneral } from '@/Standars';
import { PricingGrid, PricingSingleCard, SingleSection } from '@/Components';

export const Pricing = () => {
  return (
    <SingleSection
      title={'Pricing'}
      subtitle={loremGeneral}
    >
      <PricingGrid>
        <PricingSingleCard></PricingSingleCard>
      </PricingGrid>
    </SingleSection>
  );
};
