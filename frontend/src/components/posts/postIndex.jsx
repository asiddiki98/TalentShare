import React from 'react';
import PostItemContainer from './postItemContainer'

class PostIndex extends React.Component{
  constructor(props) {
    super(props);
  };

  renderPost(post) {
    return (
      <PostItemContainer
        key={`post-${post._id}`}
        post={post}
        artist={
          { id: post.creator }
        }
      />
    )
  };

  render(){
    let display;

    if (this.props.posts){
      display = this.props.posts.map((post) => { 
        return (
          this.renderPost(post)
        )
      })
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