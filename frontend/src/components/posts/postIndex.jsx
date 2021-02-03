import React from 'react';
import PostItemContainer from './postItemContainer'

class PostIndex extends React.Component{
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  };

  renderPost(post) {
    return (
      <PostItemContainer
        key={post._id}
        post={post}
        author={
          { id: post.creator }
        }
      />
    )
  };

  render(){
    let display;

    if (this.props.posts){
      debugger
      display = this.props.posts.map((post) => { this.renderPost(post) })
    } else {
      return null;
    }

    return (
      <div className="post-index">
        {display}
      </div>
    ) 
  }
}

export default PostIndex;