import { configureStore } from '@reduxjs/toolkit';
import { benefitReducer, courseReducer, testimonialReducer } from '../Slices';

export const store = configureStore({
  reducer: { benefitReducer, courseReducer, testimonialReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
