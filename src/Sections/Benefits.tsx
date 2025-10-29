import { SingleSection, AppToggleButton, BenefitGrid } from '@/Components';
import { loremGeneral } from '@/Standars';
import { BenefitSingleCard } from '@/Components';
import { BenefitInfo, benefit_header_data as header, benefitsID } from '@/Data';
import { yellowButtonsHover } from '@/UI';

export const Benefits = () => {
  return (
    <SingleSection
      sectionId={benefitsID}
      title={header.title}
      subtitle={header.description ?? loremGeneral}
      viewAllButton={
        <AppToggleButton
          text={'Ver todos'}
          className={yellowButtonsHover}
        />
      }
    >
      <BenefitGrid>
        {BenefitInfo.map((singleBenefit, i) => (
          <BenefitSingleCard
            key={`${i + 1}_${singleBenefit.benefitTitle}`}
            benefitNumber={i + 1}
            benefitTitle={singleBenefit.benefitTitle}
            benefitDescription={singleBenefit.benefitDescription}
          ></BenefitSingleCard>
        ))}
      </BenefitGrid>
    </SingleSection>
  );
};
