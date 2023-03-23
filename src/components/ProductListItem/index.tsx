import React from 'react';
import { useNavigate } from 'react-router-dom';
import IProduct from '../../models/IProduct';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface props {
  product: IProduct;
  handleDelete: (id: string) => void;
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

function ProductListItem({ product, handleDelete }: props) {
  const navigate = useNavigate();
  return (
    <>
      <StyledTableRow key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
        <StyledTableCell align="left">{product.name}</StyledTableCell>
        <StyledTableCell align="left">{product.serialNumber}</StyledTableCell>
        <StyledTableCell align="left">{product.vendor}</StyledTableCell>
        <StyledTableCell align="left">{product.usageCounter}</StyledTableCell>
        <StyledTableCell align="right"><button onClick={() => handleDelete(product.id as string)}>Delete</button></StyledTableCell>
      </StyledTableRow>
    </>
  );
}

export default ProductListItem;
