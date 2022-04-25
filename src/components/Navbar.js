import React from 'react';
import '../css/Navbar.css'
import logo from '../images/logo.png'
import SearchBar from './SearchBar';
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  return <div className='Navbar'>
    <div onClick= {()=>navigate('/')} className='Brand'>
      <img className='Applogo'src={logo} alt='Logo'/>
      <p className='Appname'>Movie</p>
    </div>
    <SearchBar />
  </div>;
}

export default Navbar;
