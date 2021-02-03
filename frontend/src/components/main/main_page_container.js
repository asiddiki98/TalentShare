import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPosts } from '../../actions/post_actions'
import { fetchAllUsers } from '../../actions/user_actions'

const mstp = ({ entities: { posts } }) => {
  let postCollection;
  posts ? postCollection = Object.values(posts) : postCollection = null;
  return {
    posts: postCollection
  };
}

const mdtp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mstp, mdtp)(MainPage);