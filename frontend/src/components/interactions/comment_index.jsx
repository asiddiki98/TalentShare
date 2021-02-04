import React from 'react'
import { connect } from 'react-redux'
import {
  fetchComment,
  likeComment,
  unlikeComment,
  createComment,
  deleteComment
} from '../../actions/comment_action'
import { postComments } from '../../actions/post_actions'
import CommentItem from './comment_item'


class CommentIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content: "",
            creator: this.props.currentUser,
            post: this.props.postId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.postComments(this.props.postId)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e){
        debugger
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({
            content: "",
            creator: this.props.currentUser,
            post: this.props.postId
        })
    }

    render(){
        let display = this.props.comments.map((comment, idx) => {
            return (
                <CommentItem key={`comment-${idx}`} comment={comment}/>
            )
        })


        return !display ? null : (
           <div>
               {display}
                <form onSubmit={this.handleSubmit}>
               <input type="input" placeholder="comment on this post" value={this.state.content} onChange={this.handleChange("content")}/>
                <button type="submit">post</button>
               </form>
           </div> 
               
        )
    }
}

const mstp = (state, ownProps) => {
    debugger
    return {
      comments: Object.values(state.entities.comments).filter(comment => {
          return (
            comment.post === ownProps.match
          )
      }),
      currentUser: state.session.user.id
    }
}

const mdtp = (dispatch) => {
    return {
      postComments: (postId) => dispatch(postComments(postId)),
      createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mstp, mdtp)(CommentIndex)