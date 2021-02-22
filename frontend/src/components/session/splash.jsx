import React from 'react';
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import WhiteLogo from '../../assets/images/talentsharelight.png';
import SplashBackground from '../../assets/images/splash-background.png';
import '../../assets/splash.css'
import SignupFormContainer from './signup_form_container';
import Azim from "../../assets/images/azim.jpg"
import Paul from "../../assets/images/paul.jpg"
import Tasnim from "../../assets/images/tasnim.jpg"
import Stephen from "../../assets/images/stephen.jpg"
const Splash = (props) => {
  let component;
  if(props.location.pathname === "/"){
    component = <div className="sess-form"><LoginFormContainer id="login-form"/></div>
  }else if(props.location.pathname === "/signup"){
    component = <div className="signup-form"><SignupFormContainer id="signup-form-container" /></div>
  }

  let scrollToBottom = function() {
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div className="splash-page">
      <div id="splash-design-container">
        <img id="splash-logo" src={WhiteLogo} alt="Splash Logo"/>
        <div onClick={() => scrollToBottom()} className="scroll"></div>
      </div>

      <div className="test-center">
        {component}
      </div>

      <div className="footer">
        <div className="about-us">
          <p id="team-intro">MEET THE TEAM</p>
        
          <div className="dev-container">
            <div className="developer">
              <div className="dev-pic">
                <img src={Azim} alt="Azim" />
              </div>

              <p className="developer-name">Azim Siddiki</p>
              <p className="developer-position">Team Lead</p>
              <ul className="about-us-links">
                <li>
                  <a href="https://github.com/asiddiki98" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/azim-siddiki-3b505b207/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/u/azim-siddiki" target="_blank">
                    <i className="fab fa-angellist"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i className="fas fa-user-circle"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="developer">
              <div className="dev-pic">
                <img src={Paul} alt="Paul"/>
              </div>

              <p className="developer-name">Paul Ramirez</p>
              <p className="developer-position">Frontend Lead</p>
              <ul className="about-us-links">
                <li>
                  <a href="https://github.com/pramirez23/" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/paul-ramirez-432786152/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/u/paulramirez" target="_blank">
                    <i className="fab fa-angellist"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i className="fas fa-user-circle"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="developer">
              <div className="dev-pic">
                <img src={Tasnim} alt="Tasnim" />
              </div>

              <p className="developer-name">Tasnim Saiduzzaman</p>
              <p className="developer-position">Backend Lead</p>
              <ul className="about-us-links">
                <li>
                  <a href="https://github.com/tasnim-s" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tasnim-s/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/u/tasnim-saiduzzaman" target="_blank">
                    <i className="fab fa-angellist"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i className="fas fa-user-circle"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="developer">
              <div className="dev-pic">
                <img src={Stephen} alt="Stephen" />
              </div>

              <p className="developer-name">Stephen Yang</p>
              <p className="developer-position">Flex</p>
              <ul className="about-us-links">
              <li>
                <a href="https://github.com/syangrea" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/syangrea/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://angel.co/u/stephen-yang-8" target="_blank">
                  <i className="fab fa-angellist"></i>
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i className="fas fa-user-circle"></i>
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Splash;