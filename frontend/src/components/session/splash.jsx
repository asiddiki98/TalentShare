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
    component = <div className="sess-form"><LoginFormContainer id="login-form"/></div>
  }else if(props.location.pathname === "/signup"){
    component = <div className="signup-form"><SignupFormContainer id="signup-form-container" /></div>
  }

  return (
    <div className="splash-page">
      <div id="splash-design-container">
        <img id="splash-logo" src={WhiteLogo} alt="Splash Logo"/>
      </div>

      <div className="test-center">
        {component}
      </div>
    </div>
  )
};

export default Splash;