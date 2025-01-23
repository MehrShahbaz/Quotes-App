import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNotification } from 'helper/helper';
import { AuthorState, emptyAuthor } from 'types/authorTypes';

import { getAllAuthorService, getAuthorBySlugService } from 'services/authorService';

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
      state.authors.results = [];
      state.loading = true;
    });
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.loading = false;
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthors.rejected, (state, _action) => {
      state.loading = false;
      state.authors.results = [];
    });
    builder.addCase(fetchAuthorBySlug.pending, (state, _action) => {
      state.authors.results = [];
      state.loading = true;
    });
    builder.addCase(fetchAuthorBySlug.fulfilled, (state, action) => {
      state.loading = false;
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthorBySlug.rejected, (state, _action) => {
      state.loading = false;
      state.authors.results = [];
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

export const fetchAuthorBySlug = createAsyncThunk('author/fetchAuthorBySlug', async (slug: string) => {
  try {
    const response = await getAuthorBySlugService(slug);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorNotification(err);
  }
});

export default authorSlice.reducer;
