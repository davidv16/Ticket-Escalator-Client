import React from 'react';
import { useNavigate } from 'react-router-dom';
import ICustomer from '../../models/ICustomer';

interface props {
  customer: ICustomer;
  handleDelete: (id: string) => void
}
function TicketListItem({ customer, handleDelete }: props) {
  const navigate = useNavigate();
  return (
    <>
    <div className="" onClick={() => navigate(`/customer/${customer.id}`)}>
      <p>{customer.name}</p>
      <p>{customer.ssn}</p>
      <p>{customer.address}</p>
    </div>
      <button onClick={() => handleDelete(customer.id as string)}>Delete</button>
    </>
  );
}

export default TicketListItem;
