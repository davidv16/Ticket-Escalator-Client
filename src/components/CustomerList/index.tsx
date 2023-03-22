import { error } from 'console';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ICustomer from '../../models/ICustomer';
import { deleteCustomer, fetchCustomers } from '../../store/actions/CustomerActions';
import { RootState } from '../../store/types';
import CustomerListItem from '../CustomerListItem';

function CustomerList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const customers: ICustomer[] = useAppSelector((state: RootState) => state.customers.customers);
  const loading = useAppSelector((state: RootState) => state.customers.loading);
  const error = useAppSelector((state: RootState) => state.customers.error);  
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteCustomer(id));
  };

  return (
    <>
      <div className="listheader">
        <h2>Customers</h2>
        <button onClick={() => {}}>Add Customer</button>
      </div>
      <div className="customerlist">
        {loading && <p>Loading customers...</p>}
        {error && <p>Error: {error}</p>}
        {customers.map((customer, i) => (
          <CustomerListItem
            key={i}
            customer={customer}
            handleDelete={(id: string) => handleDelete(id)}
          />
        ))}
      </div>
    </>
  );
}

export default CustomerList;
