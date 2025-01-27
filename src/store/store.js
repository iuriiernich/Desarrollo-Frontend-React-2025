import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js';
import productReducer from './features/product/productSlice.js';
import formReducer from './form/formSlice.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,  // Import the counter reducer and add it to the store's state
    product: productReducer, // Import the product reducer and add it to the store's
    form: formReducer,  // Import the form reducer and add it to the store's state
  },
});

export default store; 