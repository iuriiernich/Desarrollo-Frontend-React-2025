import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,  // Import the counter reducer and add it to the store's state

  },
});

export default store; 