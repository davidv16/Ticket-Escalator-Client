import { Dispatch } from 'redux';
import { AppThunk, TicketActionTypes } from '../../types';
// import { AppState, TicketActionTypes } from '../..';
import ITicket from '../../../models/ITicket';
import * as services from '../../../services/TicketService';
import { ADD_TICKET_FAILURE, ADD_TICKET_REQUEST, ADD_TICKET_SUCCESS, DELETE_TICKET_FAILURE, DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, UPDATE_TICKET_FAILURE, UPDATE_TICKET_REQUEST, UPDATE_TICKET_SUCCESS } from '../../constants';

  export const fetchTickets = (): AppThunk => async(dispatch: Dispatch<TicketActionTypes>) => {
    dispatch({type: FETCH_TICKETS_REQUEST});
    try {
      const tickets: ITicket[] = await services.getTickets();
      dispatch({
        type: FETCH_TICKETS_SUCCESS,
        payload: tickets,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: FETCH_TICKETS_FAILURE, payload: errorMsg});
    }
  }

  export const addTicket = (ticket: ITicket): AppThunk => async(dispatch: Dispatch<TicketActionTypes>) => {
    dispatch({type: ADD_TICKET_REQUEST});
    try {
      const newTicket: ITicket = await services.addTicket(ticket);
      dispatch({
        type: ADD_TICKET_SUCCESS,
        payload: newTicket,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: ADD_TICKET_FAILURE, payload: errorMsg});
    }
  }
  
  export const updateTicket = (ticket: ITicket): AppThunk => async(dispatch: Dispatch<TicketActionTypes>) => {
    dispatch({type: UPDATE_TICKET_REQUEST});
    try {
      const updatedTicket: ITicket = await services.updateTicket(ticket.id, ticket);
      dispatch({
        type: UPDATE_TICKET_SUCCESS,
        payload: updatedTicket
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: UPDATE_TICKET_FAILURE, payload: errorMsg});
    }
  }
  
  export const deleteTicket = (id: string): AppThunk => async(dispatch: Dispatch<TicketActionTypes>) => {
    dispatch({type: DELETE_TICKET_REQUEST});
    try {
      await services.deleteTicket(id);
      dispatch({
        type: DELETE_TICKET_SUCCESS,
        payload: id,
      });
    } catch (error) {
      //@ts-ignore
      const errorMsg = error.message;
      dispatch({type: DELETE_TICKET_FAILURE, payload: errorMsg});
    }
  }
