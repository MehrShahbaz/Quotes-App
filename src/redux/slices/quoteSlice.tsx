import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNotification } from 'helper/helper';
import { emptyQuotes, QuoteState } from 'types/quotesType';

import { getAllQuotesService } from 'services/quoteService';

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
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.loading = false;
      state.quotes = action.payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchQuotes = createAsyncThunk('quote/fetchQuotes', async () => {
  try {
    const response = await getAllQuotesService();

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorNotification(err);
  }
});

export default quoteSlice.reducer;
