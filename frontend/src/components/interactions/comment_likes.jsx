import { connect } from 'react-redux'
import React from 'react'
import { likeComment, unlikeComment } from '../../actions/comment_action';

class CommentLikes extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.likers.includes(this.props.userId)) {
      this.state = {
        liked: true
      }
    } else {
      this.state = {
        liked: false
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.liked === true) {
      this.props.unlikeComment(this.props.commentId, this.props.userId)
      this.setState({
        liked: false
      })
    } else {
      this.props.likeComment(this.props.commentId, this.props.userId)
      this.setState({
        liked: true
      })
    }
  }

  render() {
    return (
      <p onClick={() => this.handleClick()}>{this.props.likers.length}</p>
    )
  }
}

const mstp = (state, ownProps) => {
  return {
    userId: state.session.user._id
  }
}

const mdtp = (dispatch) => {
  return {
    likeComment: (commentId, userId) =>dispatch(likeComment(commentId, userId)),
    unlikeComment: (commentId, userId) => dispatch(unlikeComment(ommentId, userId))
  }
}

export default connect(mstp, mdtp)(Likes)