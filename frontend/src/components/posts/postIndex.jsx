import React from 'react';

class PostIndex extends React.Component{
  constructor(props) {
    super(props);
    // this.renderPost = this.renderPost.bind(this);
  };

  // renderPost(post) {
  //   return (
  //     <PostItemContainer
  //       key=post.
  //     />
  //   )
  // };

  render(){
    let display;
    if (this.props.posts){
      display = this.props.posts.map((post,idx) => {
        return (
          <div>
            <video key={`post-${idx}`} src={`/content/video/${post.filename}`} controls ></video>
            {post._id}
          </div>
        )
      })    
    } else {
      return null;
    }

    return (
      <div>
        {display}
      </div>
    ) 
  }

}

export default PostIndex;