import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ITicket from '../../models/ITicket';
import { addTicket, deleteTicket, fetchTickets, updateTicket } from '../../store/actions/TicketActions';
import { RootState } from '../../store/types';
import TicketListItem from '../TicketListItem';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function TicketList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tickets: ITicket[] = useAppSelector((state: RootState) => state.tickets.tickets);
  const loading = useAppSelector((state: RootState) => state.tickets.loading);
  const error = useAppSelector((state: RootState) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteTicket(id));
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
      <div className="">
        <h2>Tickets</h2>
        <Button variant="contained" color='success' onClick={() => navigate(`/ticket/add`)}>Add Ticket</Button>
      </div>
      <br/>
      <div className="">
        {loading && <p>Loading tickets...</p>}
        {error && <p>Error: {error}</p>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>index</StyledTableCell>
                <StyledTableCell align="left">Date created</StyledTableCell>
                <StyledTableCell align="left">Customer</StyledTableCell>
                <StyledTableCell align="left">Product</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Date ready</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {tickets.map((ticket, i) => (
              <TicketListItem
                key={i}
                ticket={ticket}
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

export default TicketList;
