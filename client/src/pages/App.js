import React, { createContext, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reducer from '../reducers/authReducer'
import Login from './Login';
import Home from './Home';
import '../styles/index.scss';

export const AuthContext = createContext();

const initialState = {
	isAuthenticated: false,
	user: null,
	token: null,
};

function App() {
  	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		const token = JSON.parse(localStorage.getItem('token'));

		if (user && token) {
			dispatch({
				type: 'LOGIN',
				payload: {
					data:{user,
					token,}
					
				},
			});
		}
  }, []);
  
  return (
    <AuthContext.Provider
			value={{
				state,
				dispatch,
			}}>
      <Router>
        <Switch>
          <Route exact path='/'>
            {!state.isAuthenticated ? <Login /> : <Home />}
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
