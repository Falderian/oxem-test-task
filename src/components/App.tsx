import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { HomePage } from './homepage/HomePage';
import { Sidebar } from './layout/sidebar/Sidebar';
import { UserPage } from './userpage/UserPage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
