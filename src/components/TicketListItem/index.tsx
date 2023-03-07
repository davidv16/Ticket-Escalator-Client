import React from 'react';
import { useNavigate } from 'react-router-dom';
import ITicket from '../../models/ITicket';

interface props {
  ticket: ITicket;
}
function TicketListItem({ ticket }: props) {
  return (
    <div className="match-card" onClick={()=>{}}>
      <h4>{ticket.TicketIndex}</h4>
      <p>{ticket.RegisterDate}</p>
      <p>{ticket.CustomerName}</p>
      <p>{ticket.ProductName}</p>
      <p>{ticket.Description}</p>
      <p>{ticket.ReadyDate}</p>
    </div>
  );
}

export default TicketListItem;
