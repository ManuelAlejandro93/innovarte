import { createSlice } from '@reduxjs/toolkit';
import { FAQs as faqTotalItems } from '@/Data';
import {
  FAQStateInterface,
  FAQSingleQuestionCardInterface
} from '@/Interfaces';

const minFAQDisplayedItemAmount: number = 5;
const initialFAQItemOnLayout: FAQSingleQuestionCardInterface[] =
  faqTotalItems.slice(0, minFAQDisplayedItemAmount);

const initialState: FAQStateInterface = {
  FAQItemOnLayout: initialFAQItemOnLayout,
  FAQToggleButtonText: 'Ver Todas'
};

const FAQSlice = createSlice({
  name: 'faq-state',
  initialState,
  reducers: {
    onClickFAQToggleButton: (state: FAQStateInterface) => {
      if (state.FAQItemOnLayout.length === minFAQDisplayedItemAmount) {
        state.FAQItemOnLayout = faqTotalItems;
        state.FAQToggleButtonText = 'Ver Menos';
      } else {
        state.FAQItemOnLayout = initialFAQItemOnLayout;
        state.FAQToggleButtonText = 'Ver Todas';
      }
    }
  }
});

export const { onClickFAQToggleButton } = FAQSlice.actions;
export const faqReducer = FAQSlice.reducer;
