export const quotesURL = {
  getAllQuotes: (currentPage: number) => `/quotes?page=${currentPage}`,
  getQuoteById: (id: number) => `/quotes/${id}`,
  getRandomQuote: '/quotes/random',
};
