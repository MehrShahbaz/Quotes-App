import { AxiosPromise } from 'axios';

import baseService from './baseService';
import { authorURL } from './urls';

export const getAllAuthorService = (currentPage: number): AxiosPromise =>
  baseService.get(authorURL.getAllAuthors(currentPage));

// export const getQuoteByIdService = (id: number): AxiosPromise => baseService.get(authorURL.getQuoteById(id));
