import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store/store';

import { fetchQuotes } from '../redux/slices/quoteSlice';

const Quotes = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export default Quotes;
