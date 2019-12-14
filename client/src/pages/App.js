import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import '../styles/index.scss';

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/signin'>
              <SignIn/>
            </Route>
            <Route path='/forgotpassword'>
              <ForgotPassword/>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
