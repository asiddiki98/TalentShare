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
        <PostIndex posts={this.props.posts.filter(post => {
          switch(this.props.location.pathname){
            case "/browse":
              return true;
            case "/browse/Art":
              return post.category === "Art";
            case "/browse/Photography":
              return post.category === "Photography";
            case "/browse/Music":
              return post.category === "Music";
            case "/browse/Dance":
              return post.category === "Dance";
            
          }
        })} />
        {/* <FollowIndex /> */}
      </div>
    );
  }
}

export default MainPage;
