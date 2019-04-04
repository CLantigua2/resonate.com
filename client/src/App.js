import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeFour from './HomeFour';

import Login from './Login';
import SignUp from './SignUp';
import PasswordForget from './PasswordForget';

const App = () => (
  <BrowserRouter basename={'/'} >
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeFour} />
      <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route path={`${process.env.PUBLIC_URL}/password-forget`} component={PasswordForget} />
      <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
    </Switch>
  </BrowserRouter>
);


export default App;
