import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store/store';

import { selectAllQuotes, selectTotalPages } from '../redux/selectors/quoteSelector';
import { fetchQuotes } from '../redux/slices/quoteSlice';

import Pagination from './shared/Pagination';
import Quote from './Quote';

const Quotes = (): JSX.Element => {
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
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quotes</h1>
      {/* Table container with scroll */}
      <div className="flex-grow overflow-y-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-700 sticky top-0">
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Tags</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote, index) => (
              <tr key={quote._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <Quote quote={quote} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} totalPages={totalPages} />
    </div>
  );
};

export default Quotes;
