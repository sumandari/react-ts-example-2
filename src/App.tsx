import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
