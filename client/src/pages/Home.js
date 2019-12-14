import React from 'react';

import Button from '../components/Button';
import Logo from '../components/Logo';
import '../styles/index.scss';

function Home() {
  return (
    <div className='App'>
      <div className='App-header'>
          <div className='App-area'>
            <Logo/>
          </div>
          <div className='App-area'>
            <Button 
              name='Log in' 
              href='/signin' 
              className='brandedBtn'
            />
            <Button
              name='Forgot password?'
              href='forgotpassword'
              className='plainLinkBtn'
            />
          </div>
          <div className='App-area'>
            {/*<Button
              name='Create user'
              href='#'
              className='plainLinkBtn'
            />*/}
          </div>
      </div>
    </div>
  );
}

export default Home;
