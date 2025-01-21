type PaginationParams = {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  previousPage: () => void;
};

const Pagination = ({ currentPage, totalPages, nextPage, previousPage }: PaginationParams): React.ReactElement => (
  <div className="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md mt-1">
    {/* Previous Button */}
    <button
      onClick={previousPage}
      disabled={currentPage === 1}
      className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed`}
    >
      Previous
    </button>

    {/* Current Page / Total Pages */}
    <span className="text-gray-700 text-sm font-semibold">
      Page {currentPage} of {totalPages}
    </span>

    {/* Next Button */}
    <button
      onClick={nextPage}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed`}
    >
      Next
    </button>
  </div>
);

export default Pagination;
