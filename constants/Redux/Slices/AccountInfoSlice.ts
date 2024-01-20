// features/visibilitySlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface LoggedState {
  isLoggedIn: boolean;
}

const initialState: LoggedState = {
    isLoggedIn: false,
};

const LoggedState = createSlice({
  name: 'LoggedState',
  initialState,
  reducers: {
    LogIn: (state) => {
      state.isLoggedIn = true;
    },
    LogOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { LogIn, LogOut } = LoggedState.actions;

export default LoggedState.reducer;
