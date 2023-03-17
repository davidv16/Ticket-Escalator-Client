import React, { Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import TicketListView from './views/TicketListView';
import TicketDetailView from './views/TicketDetailView';
import CustomerListView from './views/CustomerListView';
import ProductListView from './views/ProductListView';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TicketListView />} />
        <Route path="/ticket/:id" element={<TicketDetailView />} />
        <Route path="/customers" element={<CustomerListView />} />
        <Route path="/products" element={<ProductListView />} />
      </Routes>
    </>
  );
}

export default App;
