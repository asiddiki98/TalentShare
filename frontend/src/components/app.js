import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from './session/splash_container';
import SignupFormContainer from './session/signup_form_container';
import MainPage from './main/main_page';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/" component={MainPage} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    <NavBarContainer />
  </div>
);

export default App;