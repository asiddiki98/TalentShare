import React from 'react';
import Azim from "../../assets/images/azim.jpg"
import Paul from "../../assets/images/paul.jpg"
import Tasnim from "../../assets/images/tasnim.jpg"
import Stephen from "../../assets/images/stephen.jpg"
import '../../assets/splash.css'
import '../../assets/about.scss'

export default class AboutPage extends React.Component{


    render(){
        return (
        <div id="about-us-page">

            <div className="about-us">
            <p id="about-us-intro">ABOUT US</p>
            <div id="talentshare-intro">
                TalentShare is a social media application with a focus on user-generated content that revolves around art, photography, music, and dance. It provides a platform for creatives to showcase their work, gain exposure, and chat with their fans.
            </div>
            <div id="team-intro">Meet the team</div>
            <div className="dev-container">
              <div className="developer">
                <div className="dev-pic">
                    <img src={Azim} alt="Azim" />
                </div>
                <p className="developer-name"><a href="" target="_blank">Azim Siddiki</a></p>
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
                <p className="developer-name"><a href="" target="_blank">Paul Ramirez</a></p>
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
                <p className="developer-name"><a href="" target="_blank">Tasnim Saiduzzaman</a></p>
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
                <p className="developer-name"><a href="https://syangrea.github.io/" target="_blank">Stephen Yang</a></p>
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
                  <a href="https://syangrea.github.io/" target="_blank">
                    <i className="fas fa-user-circle"></i>
                  </a>
                </li>
                </ul>
              </div>
            </div>
        </div>
        </div>
        )
    }

}