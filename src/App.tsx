import React, { Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import TicketListView from './views/TicketListView';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TicketListView />} />
      </Routes>
    </>
  );
}

export default App;
