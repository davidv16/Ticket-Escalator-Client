import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';
import rootReducer from "./reducers";
import ticketReducer from "./reducers/ticketReducer";

const store = configureStore({
  reducer: {
    tickets: ticketReducer
  },
});

export default store;