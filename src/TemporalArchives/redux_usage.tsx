//!Esto
import { useDispatch, useSelector } from 'react-redux';
//!Esto
import { RootState, onClickBenefitToggleButton } from '@/Store';

import { AppToggleButton } from '@/Components';

export const Component = () => {
  //!Esto
  const { benefitToggleButtonText } = useSelector(
    (state: RootState) => state.benefitReducer
  );
  //!Esto
  const dispatch = useDispatch();
  return (
    <AppToggleButton
      //!Esto
      text={benefitToggleButtonText}
      //!Esto
      toogleFunction={() => dispatch(onClickBenefitToggleButton())}
    />
  );
};
