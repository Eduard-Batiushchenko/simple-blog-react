import { Context, MakeStore, createWrapper } from 'next-redux-wrapper';
import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { reducer, RootState } from './reducers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeStore: MakeStore<RootState> = (context: Context) =>
  configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV === 'development',
  });

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: false });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
