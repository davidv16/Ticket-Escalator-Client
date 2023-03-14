import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ITicket from '../../models/ITicket';
import ITicketAdd from '../../models/ITicketAdd';
import { getTicket } from '../../services/TicketService';
import { addTicket, deleteTicket, fetchTicket, fetchTickets, updateTicket } from '../../store/actions/TicketActions';
import { RootState } from '../../store/types';
import TicketListItem from '../TicketListItem';

function TicketForm() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const initialTicket: ITicket = {
    id: "",
    ticketIndex: 0,
    registerDate: "",
    customerName: "",
    productName: "",
    description: "",
    readyDate: "",
  }

  let ticket: ITicket = useAppSelector((state: RootState) => state.tickets.ticket);
  const loading = useAppSelector((state: RootState) => state.tickets.loading);
  const error = useAppSelector((state: RootState) => state.tickets.error);
  const [newTicket, setNewTicket] = useState<ITicket>(); 

  useEffect(() => {
    if(id == 'add') {
      ticket = initialTicket;
      dispatch(fetchTicket(''));
    } else {
      dispatch(fetchTicket(id as string));
    }
  }, []);


  const handleAdd = () => {
    const ticketToAdd: ITicketAdd = {
      registerDate: "2023-03-13",
      creatorId: "90955047-8893-4035-876b-fb9f396365c3",
      customerId: "dfae83ec-3396-456b-a8d1-6c91b0d0f255",
      productId: "a7767f4e-326e-43b6-8cfc-137f7e905fa2",
      description: "Vandamál með postjet prentara. Koma línur í útprentun.",
      extraItems: "",
      assigneeId: null,
      customerContacted: false,
      readyDate: null,
    }
    dispatch(addTicket(ticketToAdd));
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
        {id == 'add' ? ( <h2>Add Ticket</h2> )  : <h2>Edit Ticket</h2>}
        <button onClick={() => handleAdd()}>Save Ticket</button>
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
