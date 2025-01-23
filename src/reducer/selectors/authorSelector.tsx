import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'reducer/store/store';
import { AuthorState } from 'types/authorTypes';

const selectAuthorState = (state: RootState): AuthorState => state.author;

export const selectAllAuthors = createSelector(selectAuthorState, (quoteState) => quoteState.authors.results);
export const selectTotalPages = createSelector(selectAuthorState, (quoteState) => quoteState.authors.totalPages);
export const selectCurrentPage = createSelector(selectAuthorState, (quoteState) => quoteState.authors.page);

export const isAuthorLoading = createSelector(selectAuthorState, (quoteState) => quoteState.loading);
