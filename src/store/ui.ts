import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    registerUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
