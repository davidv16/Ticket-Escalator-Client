import React, { Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import TicketListView from './views/TicketListView';
import TicketDetailView from './views/TicketView';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TicketListView />} />
        <Route path="/ticket/:id" element={<TicketDetailView />} />
      </Routes>
    </>
  );
}

export default App;
