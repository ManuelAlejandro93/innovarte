import { loremGeneral } from '@/Standars';
import { PricingGrid, PricingSingleCard, SingleSection } from '@/Components';
import {
  pricing_header_data as pricing_header,
  CreditPricingBenefits,
  cashPricingBenefits
} from '@/Data';

export const Pricing = () => {
  return (
    <SingleSection
      title={pricing_header.title ?? 'Pricing'}
      subtitle={pricing_header.description ?? loremGeneral}
    >
      <PricingGrid>
        <PricingSingleCard
          paymentType='Contado'
          finalPrice={300}
          benefits={cashPricingBenefits}
        />
        <PricingSingleCard
          paymentType='Crédito'
          finalPrice={400}
          benefits={CreditPricingBenefits}
        />
      </PricingGrid>
    </SingleSection>
  );
};
//
