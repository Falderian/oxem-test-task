import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import { HomePage } from './HomePage/homepage';
import { Sidebar } from './Layout/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomePage />
      <Routes>
        {/* <Route path="/" element={Layout}> */}
        {/* <Route index element={HomePage} /> */}
        {/* <Route path="/user:name" element={UserPage} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
