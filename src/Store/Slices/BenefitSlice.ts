import { createSlice } from '@reduxjs/toolkit';
import { BenefitInfo as benefitTotalItems } from '@/Data';
import { BenefitInfoInterface, BenefitStateInterface } from '@/Interfaces';

const minBenefitDisplayedItemAmount: number = 6;
const initialBenefitItemOnLayout: BenefitInfoInterface[] =
  benefitTotalItems.slice(0, minBenefitDisplayedItemAmount);

const initialState: BenefitStateInterface = {
  benefitItemOnLayout: initialBenefitItemOnLayout,
  benefitToggleButtonText: 'Ver Todos'
};

const benefitSlice = createSlice({
  name: 'benefit-state',
  initialState,
  reducers: {
    onClickBenefitToggleButton: (state: BenefitStateInterface) => {
      if (state.benefitItemOnLayout.length === minBenefitDisplayedItemAmount) {
        state.benefitItemOnLayout = benefitTotalItems;
        state.benefitToggleButtonText = 'Ver Menos';
      } else {
        state.benefitItemOnLayout = initialBenefitItemOnLayout;
        state.benefitToggleButtonText = 'Ver Todos';
      }
    }
  }
});

export const { onClickBenefitToggleButton } = benefitSlice.actions;
export const benefitReducer = benefitSlice.reducer;
