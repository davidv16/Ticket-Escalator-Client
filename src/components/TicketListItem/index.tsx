import React from 'react';
import { useNavigate } from 'react-router-dom';
import ITicket from '../../models/ITicket';

interface props {
  ticket: ITicket;
  handleDelete: (id: string) => void
}
function TicketListItem({ ticket, handleDelete }: props) {
  const navigate = useNavigate();
  return (
    <>
    <div className="" onClick={() => navigate(`/ticket/${ticket.id}`)}>
      <h2>{ticket.ticketIndex}</h2>
      <p>{ticket.registerDate}</p>
      <p>{ticket.customer?.name}</p>
      <p>{ticket.product?.name}</p>
      <p>{ticket.description}</p>
      <p>{ticket.readyDate}</p>
    </div>
      <button onClick={() => handleDelete(ticket.id as string)}>Delete</button>
    </>
  );
}

export default TicketListItem;
