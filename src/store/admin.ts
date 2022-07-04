import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'utils/axios';

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

export const fetchContents = createAsyncThunk<Content[]>(
  'users/fetchContents',
  async () => {
    const response = await axios.get('/contents');
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchContents.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
