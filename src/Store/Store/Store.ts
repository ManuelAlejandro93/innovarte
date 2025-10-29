import { configureStore } from '@reduxjs/toolkit';
import { testReducer } from '../Slices';

export const store = configureStore({
  reducer: { testReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
