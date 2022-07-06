import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    registerUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
