import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {
  fetchComment,
  likeComment,
  unlikeComment,
  
} from '../../actions/comment_action';

import {deleteComment, editComment} from '../../actions/post_actions'

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.comment.content,
      edit: false,
      openOptions: false  
    }

    this.submitDeleteComment = this.submitDeleteComment.bind(this);
    this.clickEditOption = this.clickEditOption.bind(this);
    this.submitEditComment = this.submitEditComment.bind(this);
    this.openOptions = this.openOptions.bind(this);
    this.closeOptions = this.closeOptions.bind(this);
  
  }

  componentDidMount(){
    document.addEventListener("click", this.closeOptions, false);
  }

  openOptions(e){
    e.stopPropagation();
    this.setState({openOptions: !this.state.openOptions})
    
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.closeOptions);
  }

  closeOptions(e){
    
    if(this.state.openOptions){

      this.setState({openOptions: false});
      
    }
  }

  submitDeleteComment(e){
    e.stopPropagation()
    this.props.deleteComment(this.props.comment._id, this.props.comment.post);
    this.setState({openOptions: false});
    
  }

  clickEditOption(e){
    e.stopPropagation()
    this.setState({edit: true, openOptions: false});
    
  }
  
  update(field){
    return (e) => {
      this.setState({[field]: e.target.value,});
    }
  }

  submitEditComment(e){
    e.preventDefault();
    if(this.state.comment.length === 0) return;
    this.props.editComment(Object.assign({}, 
      this.props.comment, 
      {content: this.state.comment})).then(

        this.setState({edit: false})
      );
  }
  



  render() { 
    let commentItem;
    if(this.state.edit){
      commentItem = <form onSubmit={this.submitEditComment}>
        <input type="text" onChange={this.update('comment')} value={this.state.comment}/>
      </form>
    }else{
      commentItem = <span className="comment-content">{this.props.comment.content}</span>
    }
    let optionsMenu = null;
    if(this.state.openOptions){
      optionsMenu = <div className="comment-option-menu"  >
        <div onClick={this.submitDeleteComment}>Delete Comment</div>
        <div onClick={this.clickEditOption}>Edit Comment</div>
      </div>
    }

    const commenter = this.props.comment.creator
    return !commenter ? null : (
      <div className="comment-container" onClick={this.closeOptions}>
        <div className="comment-header">
          <div className="comment-pfp">
            <img src={`content/image/${this.props.pfp}`} alt="comment-pfp"/>
          </div> 
            
            
        </div>
        
        <div className="c-name-content">
          <Link to={`/portfolio/${this.props.creator._id}`}>{this.props.creator.username}</Link>
          {commentItem}
          
        </div>
        {
          (this.props.creator._id === this.props.currentUserId) ? 
          <button className="option-dots" onClick={this.openOptions}>
            <img src="https://img.icons8.com/ios/50/000000/ellipsis.png"/>
          </button> : null
        }
        {optionsMenu}
        
          
          
          
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
    deleteComment: (commentId, postId) => dispatch(deleteComment(commentId, postId)),
    editComment: (comment) => dispatch(editComment(comment))
  }
}

export default connect(null, mDTP)(CommentItem);
