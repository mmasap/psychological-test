import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Mode = 'question' | 'answer';

const initialState: { mode: Mode } = {
  mode: 'question',
};

const testSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    changeMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
  },
});

export const testActions = testSlice.actions;
export default testSlice.reducer;
