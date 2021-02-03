import { connect } from 'react-redux';
import PostItem from './postItem';

import {
  likePost,
  unlikePost,
  deletePost
} from '../../actions/post_actions';

const mDTP = dispatch => {
  return {
    // likePost: (post) => dispatch(likePost(post)),
    // unlikePost: (post) => dispatch(unlikePost(post)),
    // deletePost: (post) => dispatch(deletePost(post))
  }
}

export default connect(null, mDTP)(PostItem)
