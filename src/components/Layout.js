import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/main.css';

function Layout() {
  return (
    <>
      <nav className='navbar'>
        <NavLink className='links' to='/'>Home</NavLink>
        <NavLink className='links' to='/create'>Create Blog</NavLink>
        <NavLink className='links' to='/Blogs'>Blogs</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
