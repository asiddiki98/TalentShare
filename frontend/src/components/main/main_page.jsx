import React from 'react';
import PostIndex from '../posts/postIndex';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <PostIndex posts={this.props.posts} />
        {/* <FollowIndex /> */}
      </div>
    );
  }
}

export default MainPage;
