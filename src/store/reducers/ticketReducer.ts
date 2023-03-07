import { PayloadAction } from "@reduxjs/toolkit";
import { TicketAction } from "..";
import ITicket from "../../models/ITicket";
import { GET_TICKETS } from "../constants";

const initialTicket = {
    tickets: []
}

const ticketReducer = (state = initialTicket, action: PayloadAction<ITicket[]>) => {
    const {type, payload} = action;
    switch (type) {
        case GET_TICKETS:
            return { ...state, tickets: payload };
        default:
            return state;
    }
}

export default ticketReducer;