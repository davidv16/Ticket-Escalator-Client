import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ITicket from '../../models/ITicket';
import { addTicket, deleteTicket, fetchTickets, updateTicket } from '../../store/actions/TicketActions';
import { RootState } from '../../store/types';
import TicketListItem from '../TicketListItem';

function TicketList() {
  const dispatch = useAppDispatch();
  const tickets: ITicket[] = useAppSelector((state: RootState) => state.tickets.tickets);
  const loading = useAppSelector((state: RootState) => state.tickets.loading);
  const error = useAppSelector((state: RootState) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const handleAdd = (ticket: ITicket) => {
    dispatch(addTicket(ticket));
  };
  const handleUpdate = (ticket: ITicket) => {
    dispatch(updateTicket(ticket));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTicket(id));
  };

  return (
    <>
      <div className="">
        <h2>Tickets</h2>
      </div>
      <div className="">
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
