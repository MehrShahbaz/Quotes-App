import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'reducer/store/store';
import { QuoteState } from 'types/quotesType';

const selectQuoteState = (state: RootState): QuoteState => state.quote;

export const selectAllQuotes = createSelector(selectQuoteState, (quoteState) => quoteState.quotes.results);
export const selectTotalPages = createSelector(selectQuoteState, (quoteState) => quoteState.quotes.totalPages);
export const selectCurrentPage = createSelector(selectQuoteState, (quoteState) => quoteState.quotes.page);

export const isQuoteLoading = createSelector(selectQuoteState, (quoteState) => quoteState.loading);
