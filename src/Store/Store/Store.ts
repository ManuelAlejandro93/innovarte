import { configureStore } from '@reduxjs/toolkit';
import { benefitReducer } from '../Slices';

export const store = configureStore({
  reducer: { benefitReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
