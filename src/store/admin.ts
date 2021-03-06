import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Mode = 'list' | 'new' | 'edit';

const initialState: { mode: Mode } = {
  mode: 'list',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    changeMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
