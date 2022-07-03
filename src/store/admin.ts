import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Mode = 'list' | 'new' | 'edit';

type Content = {
  testTitle: string;
  question: string;
  answers: {
    choice: string;
    result: string;
    resultDetail: string;
  }[];
};

const initialState: { mode: Mode; contents: Content[] } = {
  mode: 'list',
  contents: [],
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
