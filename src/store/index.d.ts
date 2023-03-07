import ITicket from "../models/ITicket"

type TicketAction = {
    type: string
    payload: ITicket[] | Iticket
}