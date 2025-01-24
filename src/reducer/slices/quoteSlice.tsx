import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNotification } from 'helper/helper';
import { emptyQuotes, QuoteState } from 'types/quotesType';

import { getAllQuotesService, getQuoteByAuthorSlugService, getQuotesByTagService } from 'services/quoteService';

const initialState: QuoteState = {
  quotes: emptyQuotes,
  loading: false,
  error: null,
};
const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.pending, (state, _action) => {
      state.loading = true;
      state.quotes.results = [];
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.loading = false;
      state.quotes = action.payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(fetchQuotesByAuthorSlug.pending, (state, _action) => {
      state.loading = true;
      state.quotes.results = [];
    });
    builder.addCase(fetchQuotesByAuthorSlug.fulfilled, (state, action) => {
      state.loading = false;
      state.quotes = action.payload;
    });
    builder.addCase(fetchQuotesByAuthorSlug.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(fetchQuotesByTag.pending, (state, _action) => {
      state.loading = true;
      state.quotes.results = [];
    });
    builder.addCase(fetchQuotesByTag.fulfilled, (state, action) => {
      state.loading = false;
      state.quotes = action.payload;
    });
    builder.addCase(fetchQuotesByTag.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchQuotes = createAsyncThunk('quote/fetchQuotes', async (currentPage: number) => {
  try {
    const response = await getAllQuotesService(currentPage);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorNotification(err);
  }
});

type FetchQuotesByAuthorSlugType = { slug: string; page: number };

export const fetchQuotesByAuthorSlug = createAsyncThunk(
  'quote/fetchQuotesByAuthorSlug',
  async ({ slug, page }: FetchQuotesByAuthorSlugType) => {
    try {
      const response = await getQuoteByAuthorSlugService(slug, page);

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      errorNotification(err);
    }
  }
);

export const fetchQuotesByTag = createAsyncThunk(
  'quote/fetchQuotesByTag',
  async ({ slug, page }: FetchQuotesByAuthorSlugType) => {
    try {
      const response = await getQuotesByTagService(slug, page);

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      errorNotification(err);
    }
  }
);

export default quoteSlice.reducer;
