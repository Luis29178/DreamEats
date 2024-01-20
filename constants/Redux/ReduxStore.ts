// store.ts
import { configureStore } from '@reduxjs/toolkit';
import LoggedState from '@/constants/Redux/Slices/AccountInfoSlice'

export const store = configureStore({
  reducer: {
    LoggedState: LoggedState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
