import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ITicket from '../../models/ITicket';
import { getTicket } from '../../services/TicketService';
import { addTicket, deleteTicket, fetchTicket, fetchTickets, updateTicket } from '../../store/actions/TicketActions';
import { RootState } from '../../store/types';
import TicketListItem from '../TicketListItem';

function TicketForm() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const ticket: ITicket = useAppSelector((state: RootState) => state.tickets.ticket);
  const loading = useAppSelector((state: RootState) => state.tickets.loading);
  const error = useAppSelector((state: RootState) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTicket(id as string))
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
        <h2>Ticket</h2>
      </div>
      <div className="">
        {loading && <p>Loading ticket...</p>}
        {error && <p>Error: {error}</p>}
        <h2>{ticket.ticketIndex}</h2>
      <p>{ticket.registerDate}</p>
      <p>{ticket.customerName}</p>
      <p>{ticket.productName}</p>
      <p>{ticket.description}</p>
      <p>{ticket.readyDate}</p>
      </div>
    </>
  );
}

export default TicketForm;
