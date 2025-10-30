import { createSlice } from '@reduxjs/toolkit';
import { BenefitInfo as benefitTotalItems } from '@/Data';
import { BenefitInfoInterface, SectionStateInterface } from '@/Interfaces';

const minBenefitDisplayedItemAmount: number = 6;
const initialBenefitItemOnLayout: BenefitInfoInterface[] =
  benefitTotalItems.slice(0, minBenefitDisplayedItemAmount);

const initialState: SectionStateInterface = {
  benefitItemOnLayout: initialBenefitItemOnLayout,
  benefitToggleButtonText: 'Ver más'
};

const benefitSlice = createSlice({
  name: 'benefit-state',
  initialState,
  reducers: {
    onClickBenefitToggleButton: (state) => {
      if (state.benefitItemOnLayout.length === minBenefitDisplayedItemAmount) {
        state.benefitItemOnLayout = benefitTotalItems;
        state.benefitToggleButtonText = 'Ver Menos';
      } else {
        state.benefitItemOnLayout = initialBenefitItemOnLayout;
        state.benefitToggleButtonText = 'Ver Más';
      }
    }
  }
});

export const { onClickBenefitToggleButton } = benefitSlice.actions;
export const benefitReducer = benefitSlice.reducer;
