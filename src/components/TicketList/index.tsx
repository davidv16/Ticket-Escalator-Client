import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ITicket from '../../models/ITicket';
import { addTicket, deleteTicket, fetchTickets, updateTicket } from '../../store/actions/TicketActions';
import { RootState } from '../../store/types';
import TicketListItem from '../TicketListItem';

function TicketList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tickets: ITicket[] = useAppSelector((state: RootState) => state.tickets.tickets);
  const loading = useAppSelector((state: RootState) => state.tickets.loading);
  const error = useAppSelector((state: RootState) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteTicket(id));
  };

  return (
    <>
      <div className="listheader">
        <h2>Tickets</h2>
        <button onClick={() => navigate(`/ticket/add`)}>Add Ticket</button>
      </div>
      <div className="ticketlist">
        {loading && <p>Loading tickets...</p>}
        {error && <p>Error: {error}</p>}
        {tickets.map((ticket, i) => (
          <TicketListItem
            key={i}
            ticket={ticket}
            handleDelete={(id: string) => handleDelete(id)}
          />
        ))}
      </div>
    </>
  );
}

export default TicketList;
