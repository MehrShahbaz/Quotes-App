/* eslint-disable @typescript-eslint/naming-convention */
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import { isQuoteLoading } from 'reducer/selectors/quoteSelector';

const Loader = (): React.ReactElement => {
  const quoteLoading = useSelector(isQuoteLoading);

  if (quoteLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return <div id="Loader" />;
};

export default Loader;
