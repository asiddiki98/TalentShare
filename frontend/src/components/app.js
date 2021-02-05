import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from './session/splash_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';
import "../assets/reset.css";
import "../assets/chat/chat_page.scss"

import PortfolioContainer from './portfolio/portfolio_container';
import Modal from './modal/modal';
import ChatContainer from './chat/chat_container';
import ChatPage from './chat/chat_page';

const App = () => (
  <div id="app">
    <Modal />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/signup" component={SplashContainer} />
      <ProtectedRoute path="/browse" component={MainPageContainer} />
      <ProtectedRoute exact path="/portfolio/:user_id" component={PortfolioContainer} />
      <ProtectedRoute exact path="/chat" component={ChatPage} />
      
    </Switch>
    <ProtectedRoute path="/" component={ChatContainer} />
  </div>
);

export default App;