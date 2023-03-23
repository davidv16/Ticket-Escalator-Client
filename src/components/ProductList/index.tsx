import { error } from 'console';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import IProduct from '../../models/IProduct';
import { deleteProduct, fetchProducts } from '../../store/actions/ProductActions';
import { RootState } from '../../store/types';
import ProductListItem from '../ProductListItem';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function ProductList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products: IProduct[] = useAppSelector((state: RootState) => state.products.products);
  const loading = useAppSelector((state: RootState) => state.products.loading);
  const error = useAppSelector((state: RootState) => state.products.error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
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
        <h2>Products</h2>
        <Button variant="contained" color='success' onClick={() => navigate(`/ticket/add`)}>Add Product</Button>
      </div>
      <br/>
      <div className="productlist">
        {loading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Vendor</StyledTableCell>
                <StyledTableCell align="left">Serial Number</StyledTableCell>
                <StyledTableCell align="left">Usage counter</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {products.map((product, i) => (
              <ProductListItem
                key={i}
                product={product}
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

export default ProductList;
