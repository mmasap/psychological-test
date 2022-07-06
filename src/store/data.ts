import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'utils/axios';

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
  'data/fetchContents',
  async () => {
    const response = await axios.get('/contents');
    return response.data;
  }
);

const initialState: { contents: Content[]; loading: boolean } = {
  contents: [],
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContents.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
