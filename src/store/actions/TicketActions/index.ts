import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import ITicket from '../../../models/ITicket';
import * as services from '../../../services/TicketService';

import { GET_TICKETS, GET_TICKETS_ERROR } from '../../constants';
export const getTicketsDispatch = () => async (dispatch: Dispatch) => {
    try {
      const tickets: ITicket[] = await services.getTickets();
      dispatch({
        type: GET_TICKETS,
        payload: tickets,
      });
    } catch (err) {
      dispatch({
        type: GET_TICKETS_ERROR,
        payload: `GET in /tickets: ${err}`,
      });
    }
  };