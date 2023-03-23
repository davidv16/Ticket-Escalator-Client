import React from 'react';
import ProductList from '../../components/ProductList';
import TicketForm from '../../components/TicketForm';

function ProductListView() {
  return (
    <>
      <div className='container'>
        <h2>ProductListView</h2>
        <ProductList />
      </div>
    </>
  );
}

export default ProductListView;
