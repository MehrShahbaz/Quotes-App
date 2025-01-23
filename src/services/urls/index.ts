export const quotesURL = {
  getAllQuotes: (currentPage: number) => `/quotes?page=${currentPage}`,
  getQuoteById: (id: number) => `/quotes/${id}`,
  getQuoteByAuthorSlug: (slug: string, page: number) => `/quotes?author=${slug}&page=${page}`,
  getRandomQuote: '/quotes/random',
};

export const authorURL = {
  getAllAuthors: (currentPage: number) => `/authors?page=${currentPage}`,
  getAuthorBySlug: (slug: string) => `/authors?slug=${slug}`,
};
