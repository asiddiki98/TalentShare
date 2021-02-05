import React from 'react';
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import WhiteLogo from '../../assets/images/talentsharelight.png';
import Tagline from '../../assets/images/tagline.png';
import SplashBackground from '../../assets/images/splash-background.png';
import '../../assets/splash.css'
const Splash = () => {
  return (
    <div className="splash-page">
      <div id="splash-design-container">
        <img id="splash-logo" src={WhiteLogo} alt="Splash Logo"/>
      </div>
      <LoginFormContainer id="login-form"/>
    </div>
  )
};

export default Splash;