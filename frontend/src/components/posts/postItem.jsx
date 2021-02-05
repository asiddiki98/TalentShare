import React from 'react';
import { Link } from "react-router-dom";
import Likes from '../interactions/likes'
import CommentIndex from '../interactions/comment_index'
import '../../assets/posts/postIndexItem.scss'
import { timeDisplay } from '../../util/date_util';

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = {
      revealComments: false
    }
    this.onClick = this.onClick.bind(this)
  }

  renderContent(){

    const photoTypes = ["jpg", "jpeg", "png"];
    const videoTypes = ["mp4", "mov"];
    const audioTypes = ["mp3", "wav"];

    let fileType = this.props.post.filename.split('.')[1];
    let fileName = this.props.post.filename;
    // debugger
    if (photoTypes.includes(fileType)) {
      return (
        <img
          className="post-photo"
          src={`/content/image/${fileName}`}
        />
      )
    }

    if (videoTypes.includes(fileType)) {
      return (
        <video
          className="post-video"
          src={`/content/video/${fileName}`}
          controls 
        />
      )
    }

    if (audioTypes.includes(fileType)) {
      return (
        <audio
          className="post-audio"
          src={`/content/audio/${fileName}`}
          controls
        />
      )
    }

    return null;
  }

  handleMessage(e){
    let message = {
      body: "initiate",
      sender: this.props.currentUser._id,
      receiver: this.props.artistId,
      initialConnectingMessage: true
    }
    this.props.sendMessage(message).then(() =>{
      this.props.clickMessage(this.props.artistId)
    })
  }

  onClick(){
    if (!this.state.revealComments){
      this.setState({
        revealComments: true
      })
    } else {
      this.setState({
        revealComments: false
      })
    }
  }

  
  render() {
    // debugger
    let artist;
    if (!this.props.users){
      artist = null
    } else {
      artist = this.props.users[this.props.artistId]
    }
    const comments = this.props.post.comments.length
    return !artist ? null :  (
      <div className="post-container">

        <div className="post-header">
          <div className="not-message">
            <img className="post-profile-pic" src={`/content/image/${artist.propic}`} alt=""/>
            <div className="name-date">
              <div>
                <Link className="poster" to={`/portfolio/${this.props.artist._id}`}>{artist.username} </Link>
                <p className="created-at">{timeDisplay(this.props.post.createdAt)}</p>
              </div>
              <p>{this.props.post.description}</p>
            </div>
          </div>
         
          {this.props.currentUser._id !== this.props.artistId ? <button className="send-message" onClick={this.handleMessage}><div>send message</div></button> : null}
        </div>

        <div className="post-content">
          {this.renderContent()}
        </div>
        <div className="likes-comments">
            <Likes likers={this.props.post.likers} postId={this.props.post._id}/>
          {this.state.revealComments ? <div ><p className="comment-number" onClick={this.onClick}><i id="comment-open" className="fas fa-comment"></i> <div>{comments}</div></p></div> : <div> <p className="comment-number" onClick={this.onClick}><i id="comment" className="far fa-comment"></i> <div>{comments}</div></p></div> }
        </div>
        <div id="comment-section">
            {this.state.revealComments ? <CommentIndex postId={this.props.post._id} comments={this.props.post.comments}/> : null }
        </div>
      </div>
    )
  }
}

