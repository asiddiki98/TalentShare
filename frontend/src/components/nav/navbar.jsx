import React from 'react';
import { Link } from 'react-router-dom'
import NavLogo from '../../assets/images/talentsharelight.png';
import SearchBar from './search';
import '../../assets/nav.scss'

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
        <Link to='/browse'><img className='nav-logo' onClick={() => this.props.fetchPosts()} src={NavLogo} alt='' /></Link>
        <Link className='categories' to='/browse'><div className='categories' onClick={() => this.props.fetchArt()}>Art</div></Link>
        <Link className='categories' to='/browse'><div className='categories' onClick={() => this.props.fetchPhotography()}>Photography</div></Link>
        <Link className='categories' to='/browse'><div className='categories' onClick={() => this.props.fetchMusic()}>Music</div></Link>
        <Link className='categories' to='/browse'><div className='categories' onClick={() => this.props.fetchDance()}>Dance</div></Link>
        <SearchBar /> 
        {this.props.createPost}
        <div className="dropdown" onClick={this.handleClick} ref={div => this.dropDown = div} >
          <img className='nav-profile-image' src={`content/image/${this.props.propic}`} alt='' /> 
          {!this.state.hidden && <div className="dropdown-contents" onClick={e => e.stopPropagation()}>
            <div className="dropdown-options"><Link className="dropdown-portfolio"  to={`/portfolio/${this.props.user.id}`} >portfolio</Link></div>
            <div className="divider"></div>
            <div className="dropdown-options">notifications</div>
            <div className="divider"></div>
            <div className="dropdown-options" >messages</div>
            <div className="divider"></div>
            <div className="dropdown-options" onClick={this.logoutUser}>
              <div>logout</div>
            </div>

          </div>}
        </div>
      </div>
    );
  }
}

export default NavBar;
