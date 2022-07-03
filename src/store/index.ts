import { configureStore } from '@reduxjs/toolkit';
import adminReducer from 'store/admin';
import uiReducer from 'store/ui';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
