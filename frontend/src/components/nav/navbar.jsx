import React from 'react';
// import { Link } from 'react-router-dom'
import NavLogo from '../../assets/images/talentsharelight.png'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
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
        <img onClick={() => this.props.fetchPosts()} className="nav-logo" src={NavLogo} alt='' />
        <div onClick={() => this.props.fetchArt()}>Art</div>
        <div onClick={() => this.props.fetchPhotography()}>Photography</div>
        <div onClick={() => this.props.fetchMusic()}>Music</div>
        <div onClick={() => this.props.fetchDance()}>Dance</div>
        <button onClick={this.logoutUser}>logout</button>

      </div>
    );
  }
}

export default NavBar;
