import React from 'react';

import Form from '../components/Form';
import Input from '../components/FormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
// import '../styles/index.scss';

function ForgotPassword() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='App-area'>
          <Logo/>
        </div>
        <div className='App-area'>
          <Form action='#' className='brandedForm flex-center'>
            <Input type='email' name='email' placeholder='Enter your email' className='brandedInput'/>
            <Button 
              name='Recover password' 
              href='#' 
              className='brandedBtn'
            />
          </Form>
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

export default ForgotPassword;