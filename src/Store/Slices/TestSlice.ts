import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: 0
};

export const testSlice = createSlice({
  name: 'auth-state',
  initialState,
  reducers: {}
});

export const testReducer = testSlice.reducer;
export const {} = testSlice.actions;
