import React from 'react';
import { useNavigate } from 'react-router-dom';
import ICustomer from '../../models/ICustomer';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface props {
  customer: ICustomer;
  handleDelete: (id: string) => void
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function CustomerListItem({ customer, handleDelete }: props) {
  const navigate = useNavigate();
  return (
    <>
      <StyledTableRow key={customer.id} onClick={() => navigate(`/customer/${customer.id}`)}>
        <StyledTableCell align="left">{customer.name}</StyledTableCell>
        <StyledTableCell align="left">{customer.ssn}</StyledTableCell>
        <StyledTableCell align="left">{customer.address}</StyledTableCell>
        <StyledTableCell align="right"><button onClick={() => handleDelete(customer.id as string)}>Delete</button></StyledTableCell>
      </StyledTableRow>
    </>
  );
}

export default CustomerListItem;
