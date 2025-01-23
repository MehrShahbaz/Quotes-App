import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { errorNotification } from 'helper/helper';
import { selectAllQuotes, selectTotalPages } from 'reducer/selectors/quoteSelector';
import { fetchQuotes } from 'reducer/slices/quoteSlice';
import { AppDispatch } from 'reducer/store/store';

import Pagination from 'components/shared/Pagination';
import { urls } from 'routes/urls';

const Quotes = (): React.ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const quotes = useSelector(selectAllQuotes);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    if ((totalPages > 0 && currentPage > totalPages) || currentPage < 0) {
      setSearchParams({ page: '1' });
      errorNotification({ message: 'Page number out of Range' });
    }
  }, [currentPage, totalPages, setSearchParams]);

  useEffect(() => {
    dispatch(fetchQuotes(currentPage));
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
        <h1 className="text-3xl font-bold text-gray-800 text-center flex-grow">Quotes</h1>
        <Link to={urls.author} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Authors
        </Link>
      </div>
      <div className="flex-grow h-10 overflow-y-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full overflow-y-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 sticky top-0">
              <th className="px-4 py-2 text-left">Sr.</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Tags</th>
            </tr>
          </thead>
          <tbody className="">
            {quotes.map((quote, index) => {
              const { author, content, tags, authorSlug } = quote;

              return (
                <tr className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                  <td className="px-4 py-2 border-b whitespace-nowrap">{offset + index + 1}</td>
                  <td className="px-4 py-2 border-b whitespace-nowrap underline">
                    <Link to={`${urls.author}/${authorSlug}`}>{author}</Link>
                  </td>
                  <td className="px-4 py-2 border-b">{content}</td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
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

export default Quotes;
