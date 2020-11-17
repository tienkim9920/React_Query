import './App.css';
import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools'
import Navbar from './component/Navbar';
import Users from './component/Users';
import Products from './component/Products';


function App() {

  const [page, setPage] = useState('users');

  return (
    <>
    <div className="App">
      <Navbar Click={setPage} />
      { page === 'users' ? <Users /> : <Products />}
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;