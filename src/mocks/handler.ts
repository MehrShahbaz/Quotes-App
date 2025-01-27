import { http, HttpResponse } from 'msw';

// import { authorURL } from 'services/urls';
import { authorsMockData, quotessMockData } from './mockData';

export const handlers = [
  http.get('https://api.quotable.io/authors', async () => HttpResponse.json(authorsMockData)),
  http.get('https://api.quotable.io/quotes', async () => HttpResponse.json(quotessMockData)),
];
