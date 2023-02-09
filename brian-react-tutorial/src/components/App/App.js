import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';

function App() {
  const [isActive] = useState(false);

  return (
    <div className="App">
      <Title  isActive={isActive}/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
