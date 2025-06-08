/* eslint-disable no-restricted-imports */
import { configureStore, createDynamicMiddleware, createListenerMiddleware } from '@reduxjs/toolkit/react';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { combineSlices } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions, Middleware } from '@reduxjs/toolkit';
import type { BaseQueryApi } from '@reduxjs/toolkit/query';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LazyLoadedSlices { }

export const appReducer = combineSlices({}).withLazyLoadedSlices<LazyLoadedSlices>();
const listenerMiddleware = createListenerMiddleware();
const dynamicMiddleware = createDynamicMiddleware();

export type MakeStoreOptions = Omit<ConfigureStoreOptions<RootState>, 'reducer' | 'devTools' | 'middleware'>;

export const makeStore = (
  options?: MakeStoreOptions,
) => configureStore({
  reducer: appReducer,
  preloadedState: options?.preloadedState,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(listenerMiddleware.middleware)
    .concat(dynamicMiddleware.middleware),
  ...options,
});

export type AppMiddleware = Middleware<object, RootState, AppDispatch>;
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppBaseQueryApi = BaseQueryApi & {
  getState: () => RootState;
}

export const useDispatch = useReduxDispatch
  .withTypes<AppDispatch>();

export const useSelector = useReduxSelector
  .withTypes<RootState>();

export const startAppListening = listenerMiddleware.startListening
  .withTypes<RootState, AppDispatch>();

export const stopAppListening = listenerMiddleware.stopListening
  .withTypes<RootState, AppDispatch>();

export const addAppMiddleware = dynamicMiddleware.addMiddleware
  .withTypes<{ state: RootState, dispatch: AppDispatch }>();
