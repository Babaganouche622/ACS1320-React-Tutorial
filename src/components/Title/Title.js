// src/Title.js
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
        <h3 className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</h3>

        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">List</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
};

export default Title;
