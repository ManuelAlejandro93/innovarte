import { configureStore } from '@reduxjs/toolkit';
import { testReducer, benefitReducer } from '../Slices';

export const store = configureStore({
  reducer: { testReducer, benefitReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
