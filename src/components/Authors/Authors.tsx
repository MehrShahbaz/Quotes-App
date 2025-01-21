import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllAuthors, selectTotalPages } from 'reducer/selectors/authorSelector';
import { fetchAuthors } from 'reducer/slices/authorSlice';
import { AppDispatch } from 'reducer/store/store';

import Pagination from '../shared/Pagination';

import Author from './Author';

const Authors = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector(selectAllAuthors);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchAuthors(currentPage));
  }, [dispatch, currentPage]);

  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }, [totalPages]);
  const previousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-1">Authors</h1>
      <div className="flex-grow h-10 overflow-y-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full overflow-y-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 sticky top-0">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Bio</th>
              <th className="px-4 py-2 text-left">Link</th>
            </tr>
          </thead>
          <tbody className="">
            {authors.map((author, index) => (
              <tr key={author._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <Author author={author} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} totalPages={totalPages} />
    </div>
  );
};

export default Authors;
