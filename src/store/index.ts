import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
