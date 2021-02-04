import React from 'react';
import { connect } from 'react-redux';
import {
  fetchComment,
  likeComment,
  unlikeComment,
  deleteComment
} from '../../actions/comment_action';


class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    const commentId = this.props.comment._id
    this.props.fetchComment(commentId);
  }

  render() { 
    return ( null );
  }
}

const mSTP = ({ entities: { users, comments } }) => {
  // debugger
  return {
    null: null
  }
}

const mDTP = dispatch => {
  return {
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    likeComment: (commentId, userId) => dispatch(likeComment(commentId, userId)),
    unlikeComment: (commentId, userId) => dispatch(unlikeComment(commentId, userId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(mSTP, mDTP)(CommentItem);
