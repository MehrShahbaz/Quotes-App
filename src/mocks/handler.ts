import { http, HttpResponse } from 'msw';

import { authorURL } from 'services/urls';

export const handlers = [
  http.get(authorURL.getAllAuthors(1), () =>
    HttpResponse.json({
      count: 10,
      totalCount: 100,
      page: 1,
      totalPages: 10,
      lastItemIndex: 10,
      results: [
        { _id: '1', name: 'Author 1', description: 'Author 1 description', bio: 'Author 1 bio', link: 'link1' },
        { _id: '2', name: 'Author 2', description: 'Author 2 description', bio: 'Author 2 bio', link: 'link2' },
      ],
    })
  ),
];
