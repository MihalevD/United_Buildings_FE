import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';


export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  // Add other middleware or configuration options if needed
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;