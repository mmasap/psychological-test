import { configureStore } from '@reduxjs/toolkit';
import adminReducer from 'store/admin';
import appReducer from 'store/app';
import dataReducer from 'store/data';
import testReducer from 'store/test';
import uiReducer from 'store/ui';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    app: appReducer,
    data: dataReducer,
    test: testReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
