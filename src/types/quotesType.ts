export type QuoteType = {
  _id: string;
  author: string;
  content: string;
  tags: [string];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export type QuotesType = {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: QuoteType[];
};

export type QuoteState = {
  quotes: QuotesType[];
  loading: boolean;
  error: string | null;
};
