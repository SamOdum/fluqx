import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from '../components/Form';
import Input from '../components/FormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
import ForgotPassword from './ForgotPassword';

function SignIn() {
  return (
    <Fragment>
      <div className='App'>
        <div className='App-header'>
          <div className='App-area'>
            <Logo/>
          </div>
          <div className='App-area'>
            <Form action='#' className='brandedForm'>
              <Input type='email' name='email' placeholder='Enter your email' className='brandedInput'/>
              <Input type='password' name='password' placeholder='Enter your password' className='brandedInput'/>
              <Button 
                name='Sign in' 
                href='#' 
                className='brandedBtn'
              />
              <Button
                name='Forgot password?'
                href='/forgotpassword'
                className='plainLinkBtn'
              />
            </Form>
          </div>
          <div className='App-area'>
            <Button
              name='Create user'
              href='#'
              className='plainLinkBtn'
            />
          </div>
        </div>
      </div>

      <Switch>
        <Route path='/forgotpassword'><ForgotPassword/></Route>
      </Switch>
    </Fragment>
  );
}

export default SignIn;
