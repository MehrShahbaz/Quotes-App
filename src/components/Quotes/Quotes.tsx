import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllQuotes, selectTotalPages } from 'reducer/selectors/quoteSelector';
import { fetchQuotes } from 'reducer/slices/quoteSlice';
import { AppDispatch } from 'reducer/store/store';

import { urls } from 'routes/urls';

import Pagination from '../shared/Pagination';

import Quote from './Quote';

const Quotes = (): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const quotes = useSelector(selectAllQuotes);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchQuotes(currentPage));
  }, [dispatch, currentPage]);

  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }, [totalPages]);
  const previousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

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
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Tags</th>
            </tr>
          </thead>
          <tbody className="">
            {quotes.map((quote, index) => (
              <tr key={quote._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <Quote quote={quote} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} totalPages={totalPages} />
    </div>
  );
};

export default Quotes;
