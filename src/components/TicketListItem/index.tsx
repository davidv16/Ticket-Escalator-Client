import React from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ITicket from '../../models/ITicket';
interface props {
  ticket: ITicket;
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

function TicketListItem({ ticket, handleDelete }: props) {
  const navigate = useNavigate();
  return (
    <>
      
        <StyledTableRow key={ticket.ticketIndex} onClick={() => navigate(`/ticket/${ticket.id}`)}>
          <StyledTableCell component="th" scope="row">
            {ticket.ticketIndex}
          </StyledTableCell>
          <StyledTableCell align="left">{ticket.registerDate}</StyledTableCell>
          <StyledTableCell align="left">{ticket.customer?.name}</StyledTableCell>
          <StyledTableCell align="left">{ticket.product?.name}</StyledTableCell>
          <StyledTableCell align="left">{ticket.description}</StyledTableCell>
          <StyledTableCell align="left">{ticket.readyDate}</StyledTableCell>
          <StyledTableCell align="right"><button onClick={() => handleDelete(ticket.id as string)}>Delete</button></StyledTableCell>
        </StyledTableRow>
    </>
  );
}

export default TicketListItem;
