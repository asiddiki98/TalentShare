import React from 'react';
import PostIndex from '../posts/postIndex';
import '../../assets/posts/main.scss'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    this.props.fetchPosts();
    this.props.fetchAllUsers();
  }

  render() {
    return (
      <div className="main-index-component">
        <PostIndex posts={this.props.posts} />
        {/* <FollowIndex /> */}
      </div>
    );
  }
}

export default MainPage;
