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
  const initialTicket: ITicket = {
    id: "",
    ticketIndex: 0,
    registerDate: "",
    creator: { id: "", name: "", email: "" },
    customer: { id: "", name: "", ssn: "", address: ""},
    product: { id: "", name: "", vendor: "", serialNumber: "", usageCounter: 0},
    description: "",
    extraItems: "",    
    customerContacted: false,
    readyDate: "",
    repairs: [],
    spareparts: []
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
    const ticketToAdd: ITicket = {
      registerDate: "2023-03-13",
      // creator: "90955047-8893-4035-876b-fb9f396365c3",
      // customerId: "dfae83ec-3396-456b-a8d1-6c91b0d0f255",
      // productId: "a7767f4e-326e-43b6-8cfc-137f7e905fa2",
      description: "Vandamál með postjet prentara. Koma línur í útprentun.",
      extraItems: "",
      // assigneeId: null,
      customerContacted: false,
      readyDate: null,
    }
    dispatch(addTicket(ticketToAdd));
  };
  const handleUpdate = () => {
    const ticketToUpdate: ITicket = {
      registerDate: "2023-01-01",
      // creatorId: "90955047-8893-4035-876b-fb9f396365c3",
      // customerId: "dfae83ec-3396-456b-a8d1-6c91b0d0f255",
      // productId: "a7767f4e-326e-43b6-8cfc-137f7e905fa2",
      description: "Vandamál með postjet prentara. Koma línur í útprentun. en samt ekkki, þetta er í rauninni videojet",
      extraItems: "kom snúar með",
      // assigneeId: "90955047-8893-4035-876b-fb9f396365c3",
      customerContacted: false,
      readyDate: "2023-05-05",
    }
    dispatch(updateTicket(id as string, ticketToUpdate));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTicket(id));
  };

  return (
    <>
      <div className="">
        {id == 'add' ? ( <div>
          <h2>Add Ticket</h2>
            <button onClick={() => handleAdd()}>Add ticket</button>
          </div>
         )  : <div>
          <h2>Edit Ticket</h2>
            <button onClick={() => handleUpdate()}>Save Edit</button>
         </div>
         }
        
      </div>
      <div className="">
        {loading && <p>Loading ticket...</p>}
        {error && <p>Error: {error}</p>}
        <h2>{ticket.ticketIndex}</h2>
        <p>{ticket.registerDate}</p>
        <p>{ticket.customer?.name}</p>
        <p>{ticket.product?.name}</p>
        <p>{ticket.description}</p>
        <p>{ticket.readyDate}</p>
      </div>
    </>
  );
}

export default TicketForm;
