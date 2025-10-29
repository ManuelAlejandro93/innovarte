import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store';

import { SingleSection, AppToggleButton, BenefitGrid } from '@/Components';
import { loremGeneral } from '@/Standars';
import { BenefitSingleCard } from '@/Components';
import { BenefitInfo, benefit_header_data as header, benefitsID } from '@/Data';
import { yellowButtonsHover } from '@/UI';

export const Benefits = () => {
  const count = useSelector((state: RootState) => state);
  return (
    <SingleSection
      sectionId={benefitsID}
      title={header.title}
      subtitle={header.description ?? loremGeneral}
      viewAllButton={
        <AppToggleButton
          text={'Ver todos'}
          className={yellowButtonsHover}
          toogleFunction={() => console.log('Vengo desde la función toogle.')}
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

const dispatch = useDispatch();

dispatch(decrementPokemonID());
