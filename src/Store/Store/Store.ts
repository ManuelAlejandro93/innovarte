import { configureStore } from '@reduxjs/toolkit';
import { benefitReducer, courseReducer } from '../Slices';

export const store = configureStore({
  reducer: { benefitReducer, courseReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
