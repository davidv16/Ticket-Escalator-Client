import { ADD_TICKET_FAILURE, ADD_TICKET_REQUEST, ADD_TICKET_SUCCESS, DELETE_TICKET_FAILURE, DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKET_FAILURE, FETCH_TICKET_REQUEST, FETCH_TICKET_SUCCESS, UPDATE_TICKET_FAILURE, UPDATE_TICKET_REQUEST, UPDATE_TICKET_SUCCESS } from "../constants";
import ITicket from '../../models/ITicket';
import { Action } from "redux";
import store from "..";
import { ThunkAction } from "redux-thunk";
import rootReducer from "../reducers";

export interface TicketState {
  tickets: ITicket[];
  ticket: ITicket;
  loading: boolean;
  error: string | null;
}

interface FetchTicketsRequestAction extends Action {
  type: typeof FETCH_TICKETS_REQUEST;
}

interface FetchTicketsSuccessAction extends Action {
  type: typeof FETCH_TICKETS_SUCCESS;
  payload: ITicket[];
}

interface FetchTicketsFailureAction extends Action {
  type: typeof FETCH_TICKETS_FAILURE;
  payload: string;
}
interface FetchTicketRequestAction extends Action {
  type: typeof FETCH_TICKET_REQUEST;
}

interface FetchTicketSuccessAction extends Action {
  type: typeof FETCH_TICKET_SUCCESS;
  payload: ITicket;
}

interface FetchTicketFailureAction extends Action {
  type: typeof FETCH_TICKET_FAILURE;
  payload: string;
}

interface AddTicketRequestAction extends Action {
  type: typeof ADD_TICKET_REQUEST;
}

interface AddTicketSuccessAction extends Action {
  type: typeof ADD_TICKET_SUCCESS;
  payload: ITicket;
}

interface AddTicketFailureAction extends Action {
  type: typeof ADD_TICKET_FAILURE;
  payload: string;
}

interface UpdateTicketRequestAction extends Action {
  type: typeof UPDATE_TICKET_REQUEST;
}

interface UpdateTicketSuccessAction extends Action {
  type: typeof UPDATE_TICKET_SUCCESS;
  payload: ITicket;
}

interface UpdateTicketFailureAction extends Action {
  type: typeof UPDATE_TICKET_FAILURE;
  payload: string;
}

interface DeleteTicketRequestAction extends Action {
  type: typeof DELETE_TICKET_REQUEST;
}

interface DeleteTicketSuccessAction extends Action {
  type: typeof DELETE_TICKET_SUCCESS;
  payload: string;
}

interface DeleteTicketFailureAction extends Action {
  type: typeof DELETE_TICKET_FAILURE;
  payload: string;
}

export type TicketActionTypes =
  | FetchTicketsRequestAction
  | FetchTicketsSuccessAction
  | FetchTicketsFailureAction
  | FetchTicketRequestAction
  | FetchTicketSuccessAction
  | FetchTicketFailureAction
  | AddTicketRequestAction
  | AddTicketSuccessAction
  | AddTicketFailureAction
  | UpdateTicketRequestAction
  | UpdateTicketSuccessAction
  | UpdateTicketFailureAction
  | DeleteTicketRequestAction
  | DeleteTicketSuccessAction
  | DeleteTicketFailureAction;

export interface AppState {
  tickets: TicketState;
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;