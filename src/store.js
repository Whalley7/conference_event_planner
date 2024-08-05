import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
// added adReducer and mealsRedcer
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
  //added middleware to the store.js
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;