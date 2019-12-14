import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/fluqx-logo.png';


function Logo() {
    return (
        <Link to='/'>
          <img className='App-logo' src={logo} alt='logo' />
        </Link>
    )
}

export default Logo
