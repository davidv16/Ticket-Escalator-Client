import { Action } from "redux";
import store from "..";
import { ThunkAction } from "redux-thunk";
import { TicketState } from "./ticketTypes";
import { CustomerState } from "./customerTypes";



export interface AppState {
  tickets: TicketState;
  customers: CustomerState;
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;