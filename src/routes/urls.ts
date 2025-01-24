export const urls = {
  home: '/',
  quotes: '/quotes',
  quotesByTag: '/quotes/tag',
  author: '/authors',
  authorDetails: (authorSlug: string) => `/authors/${authorSlug}`,
  createQuotesByTag: (tagSlug: string) => `/quotes/tag/${tagSlug}`,
};
