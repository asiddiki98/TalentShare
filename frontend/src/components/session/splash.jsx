import React from 'react';
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import WhiteLogo from '../../assets/images/talentsharelight.png';
import SplashBackground from '../../assets/images/splash-background.png';
import '../../assets/splash.css'
import SignupFormContainer from './signup_form_container';
const Splash = (props) => {
  let component;
  // debugger
  if(props.location.pathname === "/"){
    component = <LoginFormContainer id="login-form"/>
  }else if(props.location.pathname === "/signup"){
    component = <SignupFormContainer />
  }
  return (
    <div className="splash-page">
      <div id="splash-design-container">
        <img id="splash-logo" src={WhiteLogo} alt="Splash Logo"/>
      </div>
      {component}
    </div>
  )
};

export default Splash;