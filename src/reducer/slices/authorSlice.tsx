import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNotification } from 'helper/helper';
import { AuthorState, emptyAuthor } from 'types/authorTypes';

import { getAllAuthorService } from 'services/authorService';

const initialState: AuthorState = {
  authors: emptyAuthor,
  loading: false,
  error: null,
};
const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthors.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.loading = false;
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthors.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchAuthors = createAsyncThunk('author/fetchAuthors', async (currentPage: number) => {
  try {
    const response = await getAllAuthorService(currentPage);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorNotification(err);
  }
});

export default authorSlice.reducer;
