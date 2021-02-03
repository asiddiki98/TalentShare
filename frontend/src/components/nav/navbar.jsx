import React from 'react';
// import { Link } from 'react-router-dom'
import NavLogo from '../../assets/images/talentsharelight.png';
import SearchBar from './search';
import '../../assets/nav.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
    this.handleClick = this.handleClick.bind(this);
    this.dropDown = React.createRef();
    this.logoutUser = this.logoutUser.bind(this);
  }
  componentDidMount() {
    this.dropDownListener = e => {
      if (!this.dropDown.contains(e.target)) this.setState({ hidden: true });
    }
    document.addEventListener('click', this.dropDownListener, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.dropDownListener);
  }

  handleClick(e) {
    this.setState({ hidden: !this.state.hidden });
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
      
      <div className="nav-bar">
        <img className='nav-logo' onClick={() => this.props.fetchPosts()} src={NavLogo} alt='' />
        <div onClick={() => this.props.fetchArt()}>Art</div>
        <div onClick={() => this.props.fetchPhotography()}>Photography</div>
        <div onClick={() => this.props.fetchMusic()}>Music</div>
        <div onClick={() => this.props.fetchDance()}>Dance</div>
        <SearchBar /> 
        <div onClick={this.handleClick} ref={div => this.dropDown = div} >
          <img className='nav-profile-image' src={`content/image/${this.props.propic}`} alt='' /> 
          {!this.state.hidden && <div className="dropdown-contents" onClick={e => e.stopPropagation()}>
            <div>profile</div>
            <div className="divider"></div>
            <div>notifications</div>
            <div className="divider"></div>
            <div>messages</div>
            <div className="divider"></div>
            <div onClick={this.logoutUser}>
              <div>logout</div>
            </div>

          </div>}
        </div>
      </div>
    );
  }
}

export default NavBar;
