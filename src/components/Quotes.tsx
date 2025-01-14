import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store/store';

import { selectAllQuotes } from '../redux/selectors/quoteSelector';
import { fetchQuotes } from '../redux/slices/quoteSlice';

import Quote from './Quote';

const Quotes = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const quotes = useSelector(selectAllQuotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quotes</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
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
    </div>
  );
};

export default Quotes;
