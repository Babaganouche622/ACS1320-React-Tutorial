// src/Title.js
import React from 'react'
import { NavLink } from 'react-router-dom';
// import './Title.css';

function Title() {
  
  return (
      <header className='flex flex-col items-center bg-red-600 space-y-4 py-4'>
        <h1 className='text-5xl font-bold pb-1 text-white'>SFPOPOS</h1>
        <h3 className='text-2xl pb-2 text-white'>San Franciscos Privately Owned Public Spaces</h3>

        <div className='font-bold text-2xl flex flex-row space-x-2'>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active text-white border-2 border-white rounded-md shadow-md shadow-white p-1" : "nav-link text-black border-2 border-black rounded-md shadow-md shadow-black p-1" } to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active text-white border-2 border-white rounded-md shadow-md shadow-white p-1" : "nav-link text-black border-2 border-black rounded-md shadow-md shadow-black p-1" } to="/events">Events</NavLink>
        </div>

      </header>
  )
};

export default Title;
