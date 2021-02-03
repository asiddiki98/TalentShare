import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from './session/splash_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';
import "../assets/reset.css";

import PortfolioContainer from './portfolio/portfolio_container';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/browse" component={MainPageContainer} />
      <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;