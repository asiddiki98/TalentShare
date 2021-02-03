import { connect } from 'react-redux';
import PostItem from './postItem';
import {
  likePost,
  deletePost
} from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
  return {
    post: ownProps.post
  }
}

const mDTP = dispatch => {
  return {
    likePost: (post) => dispatch(likePost(post)),
    // unlikePost: (post) => dispatch(unlikePost(post)),
    deletePost: (post) => dispatch(deletePost(post))
  }
}

export default connect(mSTP, mDTP)(PostItem)
