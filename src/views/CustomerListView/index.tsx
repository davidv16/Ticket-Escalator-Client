import React from 'react';
import CustomerList from '../../components/CustomerList';
import TicketForm from '../../components/TicketForm';

function CustomerListView() {
  return (
    <>
      <div className='container'>
        <h2>CustomerListView</h2>
        <CustomerList/>
      </div>
    </>
  );
}

export default CustomerListView;
