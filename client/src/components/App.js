import React from 'react';

import Button from './Button';
import logo from '../img/fluqx-logo.png';
import '../styles/index.scss';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='App-area'>
          <img className='App-logo' src={logo} alt='logo' />
        </div>
        <div className='App-area'>
          <Button 
            value='Log in' 
            href='#' 
            className='brandedBtn'
            />
          <Button
            value='Forgot password?'
            href='#'
            className='plainLinkBtn'
          />
        </div>
        <div className='App-area'>
          <Button
            value='Create user'
            href='#'
            className='plainLinkBtn'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
