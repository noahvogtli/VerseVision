import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Banner />

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
