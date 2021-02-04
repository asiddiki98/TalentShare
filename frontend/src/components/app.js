import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from './session/splash_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';
import "../assets/reset.css";

import PortfolioContainer from './portfolio/portfolio_container';
import Modal from './modal/modal';
import ChatContainer from './chat/chat_container';

const App = () => (
  <div>
    <Modal />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/browse" component={MainPageContainer} />
      <ProtectedRoute exact path="/portfolio/:user_id" component={PortfolioContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    <ProtectedRoute path="/" component={ChatContainer} />
  </div>
);

export default App;