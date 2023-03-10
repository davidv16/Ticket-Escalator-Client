import { TicketActionTypes, TicketState } from '../types';
import { ADD_TICKET_FAILURE, ADD_TICKET_REQUEST, ADD_TICKET_SUCCESS, DELETE_TICKET_FAILURE, DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKET_FAILURE, FETCH_TICKET_REQUEST, FETCH_TICKET_SUCCESS, UPDATE_TICKET_FAILURE, UPDATE_TICKET_REQUEST, UPDATE_TICKET_SUCCESS } from "../constants";
import ITicket from "../../models/ITicket";


const initialState: TicketState = {
  tickets: [],
  ticket: {
    id: "",
    ticketIndex: 0,
    registerDate: "",
    customerName: "",
    productName: "",
    description: "",
    readyDate: ""
  },
  loading: false,
  error: null
};
const ticketReducer = ( state: TicketState = initialState, action: TicketActionTypes): TicketState => {
  switch(action.type) {
    case FETCH_TICKETS_REQUEST:
    case FETCH_TICKET_REQUEST:
    case ADD_TICKET_REQUEST:
    case UPDATE_TICKET_REQUEST:
    case DELETE_TICKET_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TICKET_SUCCESS:
      return {
        ...state,
        ticket: action.payload,
        loading: false,
        error: null,
      };
    case ADD_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.map((ticket: ITicket) =>
          ticket.id === action.payload.id ? action.payload : ticket
          ),
        loading: false,
        error: null,
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.filter((ticket: ITicket) => ticket.id !== action.payload),
        loading: false,
        error: null
      };
    case FETCH_TICKETS_FAILURE:
    case FETCH_TICKET_FAILURE:
    case ADD_TICKET_FAILURE:
    case UPDATE_TICKET_FAILURE:
    case DELETE_TICKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default ticketReducer;