import { createSlice } from '@reduxjs/toolkit';
import { BenefitInfo } from '@/Data';

const initialState: Counter = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter-state',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      return { ...state, value: state.value + action.payload };
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    }
  }
});

export const { increment, decrement, incrementBy, decrementBy } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
