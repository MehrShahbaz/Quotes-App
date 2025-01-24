import { AxiosPromise } from 'axios';

import baseService from './baseService';
import { quotesURL } from './urls';

export const getAllQuotesService = (currentPage: number): AxiosPromise =>
  baseService.get(quotesURL.getAllQuotes(currentPage));

export const getQuoteByIdService = (id: number): AxiosPromise => baseService.get(quotesURL.getQuoteById(id));

export const getQuoteByAuthorSlugService = (slug: string, page: number): AxiosPromise =>
  baseService.get(quotesURL.getQuoteByAuthorSlug(slug, page));

export const getQuotesByTagService = (slug: string, page: number): AxiosPromise =>
  baseService.get(quotesURL.getQuoteByTag(slug, page));

export const getRandomQuoteService = (): AxiosPromise => baseService.get(quotesURL.getRandomQuote);
