import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';
import rootReducer from "./reducers";
import customerReducer from "./reducers/customerReducer";
import ticketReducer from "./reducers/ticketReducer";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    customers: customerReducer
  },
});

export default store;