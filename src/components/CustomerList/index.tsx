import { error } from 'console';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ICustomer from '../../models/ICustomer';
import { deleteCustomer, fetchCustomers } from '../../store/actions/CustomerActions';
import { RootState } from '../../store/types';
import CustomerListItem from '../CustomerListItem';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <>
      <div className="listheader">
        <h2>Customers</h2>
        <Button variant="contained" color='success' onClick={() => navigate(`/ticket/add`)}>Add Customer</Button>
      </div>
      <br/>
      <div className="customerlist">
        {loading && <p>Loading customers...</p>}
        {error && <p>Error: {error}</p>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">SSN</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {customers.map((customer, i) => (
              <CustomerListItem
                key={i}
                customer={customer}
                handleDelete={(id: string) => handleDelete(id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
}

export default CustomerList;
