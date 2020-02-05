import React, {Fragment, useContext, useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from '../components/Form';
import Input from '../components/FormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
import ForgotPassword from './ForgotPassword';
import failSymbol from '../img/svg/fail.svg';
import { AuthContext } from './App';

function Login() {
  // Get Authorization context from App component
	const { dispatch } = useContext(AuthContext);
	const initialState = {
		email: '',
		password: '',
		isSubmitting: false,
		errorMessage: null,
	};

  const [data, setData] = useState(initialState);
  
  // Set up input handler
  const handleInputChange = event => {
  setData({
    ...data,
    [event.target.name]: event.target.value,
  });
  };
  
  // Set up form submission
  const handleFormSubmit = event => {
		event.preventDefault();
		setData({
			...data,
			isSubmitting: true,
			errorMessage: null,
		});
		fetch({/* DROP LOGIN ENDPOINT HERE 'http://localhost:5000/api/v1/auth/login/' */}, {
			//**Remember to implement .env here */
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: data.email,
				password: data.password1,
			}),
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				throw res;
			})
			.then(resJson => {
				dispatch({
					type: 'LOGIN',
					payload: resJson,
				});
			})
			.catch(error => {
				setData({
					...data,
					isSubmitting: false,
					errorMessage: error.status === 400? 'Fill all fields correctly' : error.message || error.statusText,
				});
			});
	};

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
            <Form onSubmit={handleFormSubmit} className='brandedForm'>
              <Input 
                type='email' 
                name='email' 
                placeholder='Email address' 
                onChange={handleInputChange}
                value={data.email} 
                className='brandedInput'
              />
              <Input 
                type='password' 
                name='password' 
                placeholder='Password' 
                onChange={handleInputChange} 
                value={data.password}
                className='brandedInput'
              />
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
          <div className='App-area' id='error-div' >
            {data.errorMessage ? (
              <div>
                <div><img src={failSymbol} alt="fail symbol"/></div>
                <div>The email address or password you entered is incorrect. Please try again.</div>
              </div>
            ):('') }
          </div>
        </div>
      </div>

      <Switch>
        <Route path='/forgotpassword'><ForgotPassword/></Route>
      </Switch>
    </Fragment>
  );
}

export default Login;
