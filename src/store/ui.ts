import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    registerUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
