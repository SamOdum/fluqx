import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from '../components/Form';
import Input from '../components/FormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
import ForgotPassword from './ForgotPassword';

function Login() {
  return (
    <Fragment>
      <div className='App'>
        <div className='App-header'>
          <div className='App-area'>
            <div>
              <Logo/>
            </div>           
          </div>
          <div className='App-area'>
            <Form action='#' className='brandedForm'>
              <Input type='email' name='email' placeholder='Email address' className='brandedInput'/>
              <Input type='password' name='password' placeholder='Password' className='brandedInput'/>
              <Button
                name='Forgot password?'
                href='/forgotpassword'
                className='plainLinkBtn'
              />
              <Button 
                name='Log In' 
                href='#' 
                className='brandedBtn'
              />
            </Form>
          </div>
          {<div className='App-area'>
            {/*<Button
              name='Create user'
              href='#'
              className='plainLinkBtn'
            />*/}
          </div>}
        </div>
      </div>

      <Switch>
        <Route path='/forgotpassword'><ForgotPassword/></Route>
      </Switch>
    </Fragment>
  );
}

export default Login;
