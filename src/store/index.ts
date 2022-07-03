import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin';
import uiReducer from './ui';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
