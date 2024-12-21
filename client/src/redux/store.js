import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'

// use that in the signin page
export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})