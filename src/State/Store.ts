import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { thunk } from 'redux-thunk';
import adminSlice from './admin/adminSlice';
import adminProductSlice from './admin/adminProductSlice';
import productSlice from './customer/ProductSlice';
const rootReducer = combineReducers({
  admin: adminSlice,
  adminProduct: adminProductSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
