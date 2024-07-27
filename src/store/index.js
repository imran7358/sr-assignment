
import { configureStore } from '@reduxjs/toolkit';
import liveData from './userData/liveData';

const store = configureStore({
  reducer: {
    userData: liveData
    // Add other reducers here
  }
});

export default store