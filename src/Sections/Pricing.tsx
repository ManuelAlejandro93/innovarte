import { loremGeneral } from '@/Standars';
import { PricingGrid, PricingSingleCard, SingleSection } from '@/Components';
import { pricing_header_data as pricing_header } from '@/Data';

export const Pricing = () => {
  return (
    <SingleSection
      title={pricing_header.title ?? 'Pricing'}
      subtitle={pricing_header.description ?? loremGeneral}
    >
      <PricingGrid>
        <PricingSingleCard></PricingSingleCard>
        <PricingSingleCard></PricingSingleCard>
      </PricingGrid>
    </SingleSection>
  );
};
