import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { errorNotification } from 'helper/helper';
import { selectAllAuthors, selectTotalPages } from 'reducer/selectors/authorSelector';
import { fetchAuthors } from 'reducer/slices/authorSlice';
import { AppDispatch } from 'reducer/store/store';

import Pagination from 'components/shared/Pagination';
import { urls } from 'routes/urls';

const Authors = (): React.ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector(selectAllAuthors);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    if ((totalPages > 0 && currentPage > totalPages) || currentPage < 0) {
      setSearchParams({ page: '1' });
      errorNotification({ message: 'Page number out of Range' });
    }
  }, [currentPage, totalPages, setSearchParams]);

  useEffect(() => {
    dispatch(fetchAuthors(currentPage));
  }, [dispatch, currentPage]);
  const offset = useMemo(() => 20 * (currentPage - 1), [currentPage]);
  const nextPage = useCallback(() => {
    const newPage = Math.min(currentPage + 1, totalPages);

    setSearchParams({ page: newPage.toString() });
  }, [currentPage, totalPages, setSearchParams]);
  const previousPage = useCallback(() => {
    const prevPage = Math.max(currentPage - 1, 1);

    setSearchParams({ page: prevPage.toString() });
  }, [currentPage, setSearchParams]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 text-center flex-grow">Authors</h1>
        <Link role="link" to={urls.quotes} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Quotes
        </Link>
      </div>

      <div className="flex-grow h-10 overflow-y-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full overflow-y-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 sticky top-0">
              <th className="px-4 py-2 text-left">Sr.</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Quotes Count</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => {
              const { name, description, slug, quoteCount } = author;

              return (
                <tr key={author._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                  <td className="px-4 py-2 border-b whitespace-nowrap">{offset + index + 1}</td>
                  {parseInt(quoteCount) > 0 ? (
                    <td className="px-4 py-2 border-b whitespace-nowrap underline">
                      <Link data-testid={`author-link-${index}`} to={`${urls.author}/${slug}`}>
                        {name}
                      </Link>
                    </td>
                  ) : (
                    <td className="px-4 py-2 border-b">{name}</td>
                  )}
                  <td className="px-4 py-2 border-b">{description}</td>
                  <td data-testid={`author-count-${index}`} className="px-4 py-2 border-b">
                    {quoteCount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} totalPages={totalPages} />
    </div>
  );
};

export default Authors;
