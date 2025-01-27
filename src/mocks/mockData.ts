import { AuthorsType } from 'types/authorTypes';
import { QuotesType } from 'types/quotesType';

export const authorsMockData: AuthorsType = {
  count: 10,
  totalCount: 100,
  page: 1,
  totalPages: 10,
  lastItemIndex: 10,
  results: [
    {
      _id: '1',
      name: 'Author 1',
      description: 'Author 1 description',
      bio: 'Author 1 bio',
      link: 'link1',
      slug: 'author-1',
      quoteCount: '10',
    },
    {
      _id: '2',
      name: 'Author 2',
      description: 'Author 2 description',
      bio: 'Author 2 bio',
      link: 'link2',
      slug: 'author-2',
      quoteCount: '10',
    },
    {
      _id: '3',
      name: 'Author 3',
      description: 'Author 3 description',
      bio: 'Author 3 bio',
      link: 'link2',
      slug: 'author-3',
      quoteCount: '0',
    },
  ],
};
export const quotessMockData: QuotesType = {
  count: 10,
  totalCount: 100,
  page: 1,
  totalPages: 10,
  lastItemIndex: 10,
  results: [
    {
      _id: '1',
      author: 'Author 1',
      content: 'Author 1 Quote',
      tags: ['tag-1', 'tag-2'],
      authorSlug: 'author-1',
      length: 10,
      dateAdded: 'Yesterday',
      dateModified: 'Today',
    },
    {
      _id: '2',
      author: 'Author 2',
      content: 'Author 2 Quote',
      tags: ['tag-1', 'tag-2'],
      authorSlug: 'author-2',
      length: 10,
      dateAdded: 'Yesterday',
      dateModified: 'Today',
    },
    {
      _id: '3',
      author: 'Author 3',
      content: 'Author 3 Quote',
      tags: [],
      authorSlug: 'author-3',
      length: 10,
      dateAdded: 'Yesterday',
      dateModified: 'Today',
    },
  ],
};
