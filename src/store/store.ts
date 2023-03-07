import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducers from './reducers';
import ticketReducer from './reducers/ticketReducer';

// export const store = configureStore();

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   // RootState,
//   unknown,
//   Action<string>
// >;