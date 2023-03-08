import React from 'react';
import ITicket from '../../models/ITicket';

interface props {
  ticket: ITicket;
  handleDelete: (id: string) => void
}
function TicketListItem({ ticket, handleDelete }: props) {
  return (
    <div className="">
      <h2>{ticket.ticketIndex}</h2>
      <p>{ticket.registerDate}</p>
      <p>{ticket.customerName}</p>
      <p>{ticket.productName}</p>
      <p>{ticket.description}</p>
      <p>{ticket.readyDate}</p>
      <button onClick={() => handleDelete(ticket.id)}>Delete</button>
    </div>
  );
}

export default TicketListItem;
