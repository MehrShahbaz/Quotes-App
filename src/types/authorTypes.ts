export type AuthorType = {
  _id: string;
  bio: string;
  description: string;
  link: string;
  name: string;
  slug: string;
  quoteCount: string;
};

export type AuthorsType = {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: AuthorType[];
};

export type AuthorState = {
  authors: AuthorsType;
  loading: boolean;
  error: string | null;
};

export const emptyAuthor: AuthorsType = {
  count: 0,
  totalCount: 0,
  page: 1,
  totalPages: 0,
  lastItemIndex: 0,
  results: [],
};
