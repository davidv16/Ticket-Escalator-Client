import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ITicket from '../../models/ITicket';
import { getTicket } from '../../services/TicketService';
import { addTicket, deleteTicket, fetchTicket, fetchTickets, updateTicket } from '../../store/actions/TicketActions';
import { RootState } from '../../store/types';

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
  }, []);


  const handleAdd = () => {

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
            <button onClick={() => {}}>Save Edit</button>
         </div>
         }
      </div>
      <div className="">
        
      </div>
    </>
  );
}

export default TicketForm;
