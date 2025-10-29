import { useDispatch, useSelector } from 'react-redux';
import { RootState, onClickBenefitToggleButton } from '@/Store';

import { SingleSection, AppToggleButton, BenefitGrid } from '@/Components';
import { loremGeneral } from '@/Standars';
import { BenefitSingleCard } from '@/Components';
import { benefit_header_data as header, benefitsID } from '@/Data';
import { yellowButtonsHover } from '@/UI';

export const Benefits = () => {
  const { benefitItemOnLayout, benefitToggleButtonText } = useSelector(
    (state: RootState) => state.benefitReducer
  );
  const dispatch = useDispatch();
  return (
    <SingleSection
      sectionId={benefitsID}
      title={header.title}
      subtitle={header.description ?? loremGeneral}
      viewAllButton={
        <AppToggleButton
          text={benefitToggleButtonText}
          className={yellowButtonsHover}
          toogleFunction={() => dispatch(onClickBenefitToggleButton())}
        />
      }
    >
      <BenefitGrid>
        {benefitItemOnLayout.map((singleBenefit, i) => (
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
