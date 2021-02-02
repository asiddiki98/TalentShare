import React from 'react';
import PostIndexContainer from '../posts/postIndexContainer'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <PostIndexContainer posts={this.props.posts} />
        {/* <FollowIndex /> */}
      </div>
    );
  }
}

export default MainPage;
