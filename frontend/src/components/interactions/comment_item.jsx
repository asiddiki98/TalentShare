import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
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

  // componentDidMount(){
  //   const commentId = this.props.comment._id
  //   this.props.fetchComment(commentId);
  // }

  render() { 
    const commenter = this.props.comment.creator
    return !commenter ? null : (
      <div className="comment-container">
        <div className="comment-header">
          <div className="comment-pfp">
            {/* <img src={`content/image/${this.props.pfp}`} alt="comment-pfp"/> */}
          </div> 
            <Link to={`/portfolio/${this.props.creator._id}`}>{this.props.creator.username}</Link>
        </div>

        <span className="comment-content">{this.props.comment.content}</span>
      </div>
    );
  }
}

// const mSTP = ({ entities: { users, comments } }) => {
//   const comment
//   return {
//     null: null
//   }
// }

const mDTP = dispatch => {
  return {
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    likeComment: (commentId, userId) => dispatch(likeComment(commentId, userId)),
    unlikeComment: (commentId, userId) => dispatch(unlikeComment(commentId, userId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(null, mDTP)(CommentItem);
