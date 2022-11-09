import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greeting/greetingSlice';

export default configureStore({
  reducer: {
    message: greetingSlice,
  },
});
