import { SingleSection, AppButton, BenefitGrid } from '@/Components';
import { loremGeneral } from '@/Standars';
import { BenefitCard } from '@/Components';
import { BenefitInfo, benefit_header_data as header } from '@/Data';
import { yellowButtonsHover } from '@/UI';

export const Benefits = () => {
  return (
    <SingleSection
      title={header.title}
      subtitle={header.description ?? loremGeneral}
      viewAllButton={
        <AppButton
          text={'Ver todos'}
          className={yellowButtonsHover}
        />
      }
    >
      <BenefitGrid>
        {BenefitInfo.map((singleBenefit, i) => (
          <BenefitCard
            key={`${i + 1}_${singleBenefit.benefitTitle}`}
            benefitNumber={i + 1}
            benefitTitle={singleBenefit.benefitTitle}
            benefitDescription={singleBenefit.benefitDescription}
          ></BenefitCard>
        ))}
      </BenefitGrid>
    </SingleSection>
  );
};
