import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: 0
};

export const testSlice = createSlice({
  name: 'test-state',
  initialState,
  reducers: {
    add1(state) {
      state.state++;
    }
  }
});

export const testReducer = testSlice.reducer;
export const { add1 } = testSlice.actions;
