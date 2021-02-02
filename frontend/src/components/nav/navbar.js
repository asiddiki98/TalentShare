import React from 'react';
import { Link } from 'react-router-dom'
import NavLogo from '../../assets/images/talentsharelight.png'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (!this.props.propic) {
      return null;
    }

    return (
      <div>
        <img src={NavLogo} />
        {/* <img src={`image/${this.props.propic}`} /> */}
        <Link to={'/'}>TalentShare</Link>
        { this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
