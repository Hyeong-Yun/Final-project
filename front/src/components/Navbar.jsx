import React from 'react';
import { Link } from 'react-router-dom';
import {RiBearSmileFill} from "react-icons/ri"
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
// import {login, logout, onUserStateChange} from '../api/firebase';
import { useState, useEffect } from 'react';
import { Header } from './Navbar-style';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    // onUserStateChange(setUser)
  }, [])

  const handleLogin = () => {
    // login();
  }

  const handleLogout = () => {
    // logout();
  }

  return (
    <Header>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <RiBearSmileFill />
        <h1>MZToys</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        {/* <Link to='/products'>
          <h3>Products</h3>
          </Link> */}
        <Link to='/carts' className="flex">
        <AiOutlineShoppingCart size="32"/>
          <span className='mx-4'>Carts</span>
          </Link>
        {/* <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link> */}
        <AiOutlineUser size="32"></AiOutlineUser>
        {!user && <button onClick = {handleLogin}>Login</button>}
        {user && <button onClick = {handleLogout}>Login</button>}
      </nav>
    </Header>
  );
}
