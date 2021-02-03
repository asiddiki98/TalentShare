import React from 'react';
import PostIndex from '../posts/postIndex';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

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
