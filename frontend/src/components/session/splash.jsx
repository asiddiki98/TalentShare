import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import WhiteLogo from '../../images/talentsharelight.png';

const Splash = () => {
  return (
    <div>
      <img src={WhiteLogo} alt="Splash Logo"/>
      <LoginFormContainer />
    </div>
  )
};

export default Splash;