// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
//add avSlice from ./avSlcie
import avReducer from './avSlice';
//add mealSlice from ./mealSlice
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  },
});





