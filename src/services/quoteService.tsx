import { AxiosPromise } from 'axios';

import baseService from './baseService';
import { quotesURL } from './urls';

export const getAllQuotesService = (): AxiosPromise => baseService.get(quotesURL.getAllQuotes);

export const getQuoteByIdService = (id: number): AxiosPromise => baseService.get(quotesURL.getQuoteById(id));

export const getRandomQuoteService = (): AxiosPromise => baseService.get(quotesURL.getRandomQuote);
