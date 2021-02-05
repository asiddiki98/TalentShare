import { connect } from 'react-redux';
import PostItem from './postItem';
import {
  likePost,
  deletePost
} from '../../actions/post_actions';
import { sendInitialMessage } from '../../actions/message_action';
import { clickMessage } from '../../actions/filter_action';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    users: state.entities.users,
    artistId: ownProps.artist._id,
    post: ownProps.post
  }
}

const mDTP = dispatch => {
  return {
    likePost: (post) => dispatch(likePost(post)),
    // unlikePost: (post) => dispatch(unlikePost(post)),
    deletePost: (post) => dispatch(deletePost(post)),
    sendMessage: message => dispatch(sendInitialMessage(message)),
    clickMessage: userId => dispatch(clickMessage(userId)),
    
  }
}

export default connect(mSTP, mDTP)(PostItem)
