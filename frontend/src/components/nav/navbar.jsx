import React from 'react';
import { Link } from 'react-router-dom'
import NavLogo from '../../assets/images/talentsharenavlogo.png';
import SearchBar from './search';
import '../../assets/nav.scss'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hidden: true,
      art: false, 
      photography: false,
      music: false,
      dance: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.dropDown = React.createRef();
    this.logoutUser = this.logoutUser.bind(this);
    this.handleArt = this.handleArt.bind(this);
    this.handlePhotography = this.handlePhotography.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
    this.handleDance = this.handleDance.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this)
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

  handleArt(){
    // this.props.fetchArt()
    this.setState({
      art: true,
      photography: false,
      music: false,
      dance: false
    })
  }
  handlePhotography(){
    // this.props.fetchPhotography()
    this.setState({
      art: false,
      photography: true,
      music: false,
      dance: false
    })
  }
  handleMusic(){
    // this.props.fetchMusic()
    this.setState({
      art: false,
      photography: false,
      music: true,
      dance: false
    })
  }
  handleDance(){
    // this.props.fetchDance()
    this.setState({
      art: false,
      photography: false,
      music: false,
      dance: true
    })
  }

  fetchPosts(){
    // this.props.fetchPosts()
    this.setState({
      art: false,
      photography: false,
      music: false,
      dance: false
    })
  }

  render() {
    if (!this.props.propic) {
      return null;
    }
    
    return (
      
      <div className="nav-bar">
        <Link to='/browse'><img className='nav-logo' onClick={this.fetchPosts} src={NavLogo} alt='' /></Link>
        {/* <Link id={`art-${this.state.art}`} className='categories' to='/browse/Art'><div className='categories' onClick={this.handleArt}>Art</div></Link>
        <Link id={`photography-${this.state.photography}`} className='categories/Photography' to='/browse'><div className='categories' onClick={this.handlePhotography}>Photography</div></Link>
        <Link id={`music-${this.state.music}`} className='categories' to='/browse/Music'><div className='categories' onClick={this.handleMusic}>Music</div></Link>
        <Link id={`dance-${this.state.dance}`} className='categories' to='/browse/Dance'><div className='categories' onClick={this.handleDance}>Dance</div></Link> */}
        {/* <Link to='/browse'><img className='nav-logo'  src={NavLogo} alt='' /></Link> */}
        <Link id={`art-${this.state.art}`} className='categories' to='/browse/Art' onClick={this.handleArt}><div className='categories' >Art</div></Link>
        <Link id={`photography-${this.state.photography}`} className='categories' to='/browse/Photography' onClick={this.handlePhotography}><div className='categories' >Photography</div></Link>
        <Link id={`music-${this.state.music}`} className='categories' to='/browse/Music' onClick={this.handleMusic}><div className='categories' >Music</div></Link>
        <Link id={`dance-${this.state.dance}`} className='categories' to='/browse/Dance' onClick={this.handleDance}><div className='categories' >Dance</div></Link>
        <SearchBar /> 
        {this.props.createPost}
        <div className="dropdown" onClick={this.handleClick} ref={div => this.dropDown = div} >
          <img className='nav-profile-image' src={`content/image/${this.props.propic}`} alt='' /> 
          {!this.state.hidden && <div className="dropdown-contents" onClick={e => e.stopPropagation()}>
            <Link className="dropdown-portfolio" to={`/portfolio/${this.props.user._id}`} ><div className="dropdown-options">portfolio</div></Link>
            <div className="divider"></div>
            <Link className="dropdown-portfolio" to="/chat"><div className="dropdown-options" >messages</div></Link>
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
