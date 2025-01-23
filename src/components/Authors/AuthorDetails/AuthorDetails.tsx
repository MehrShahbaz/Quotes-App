import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { selectAllAuthors } from 'reducer/selectors/authorSelector';
import { fetchAuthorBySlug } from 'reducer/slices/authorSlice';
import { AppDispatch } from 'reducer/store/store';

const AuthorDetails = (): React.ReactElement => {
  const { authorSlug } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const author = useSelector(selectAllAuthors);

  useEffect(() => {
    if (authorSlug) {
      dispatch(fetchAuthorBySlug(authorSlug));
    }
  }, [authorSlug, dispatch]);

  if (!author.length) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  const { name, description, bio, quoteCount, link } = author[0];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Go Back Button */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Go Back
        </button>
      </div>

      {/* Author Details Card */}
      <div className="max-w-2xl w-full bg-white border rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
        <p className="text-gray-600 italic mb-6">{description}</p>
        <div className="text-gray-700 space-y-4">
          <p>
            <span className="font-medium">Bio:</span> {bio}
          </p>
          <p>
            <span className="font-medium">Quotes Count:</span> {quoteCount}
          </p>
        </div>
        {/* Links: Separate Ends */}
        <div className="mt-6 flex justify-between items-center">
          <Link to="" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Show Quotes
          </Link>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
            Visit Author Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
