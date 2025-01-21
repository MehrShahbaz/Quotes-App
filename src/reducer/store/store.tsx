import { configureStore } from '@reduxjs/toolkit';

import quoteSlice from '../slices/quoteSlice';

const store = configureStore({
  reducer: { quote: quoteSlice },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type correctly
export type AppDispatch = typeof store.dispatch;

export default store;
