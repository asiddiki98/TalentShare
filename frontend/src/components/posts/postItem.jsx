import React from 'react';
import { Link } from "react-router-dom";
import Likes from '../interactions/likes'
import CommentIndex from '../interactions/comment_index'

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
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
  // componentDidUpdate(oldProps){
  //   if (this.props.comments.length !== oldProps.comments.length){
      
  //   }
  // }
  
  render() {
    // debugger
    let artist;
    if (!this.props.users){
      artist = null
    } else {
      artist = this.props.users[this.props.artistId]
    }
    return !artist ? null :  (
      <div className="post-container">

        <div className="post-header">
          <img className="post-profile-pic" src={`/content/image/${artist.propic}`} alt=""/>
          <Link to={`/portfolio/${this.props.artist._id}`}>{artist.username}</Link>
          {this.props.currentUser._id !== this.props.artistId ? <button onClick={this.handleMessage}>Send Message</button> : null}
          
          <p>{this.props.post.description}</p>
          <p>{this.props.post.createdAt.split('T')[0]}</p>
        </div>

        <div className="post-content">
          {this.renderContent()}
          <Likes likers={this.props.post.likers} postId={this.props.post._id}/>
          <CommentIndex postId={this.props.post._id} comments={this.props.post.comments}/> 
        </div>
      </div>
    )
  }
}