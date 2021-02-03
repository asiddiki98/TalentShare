import React from 'react';
import { Link } from "react-router-dom";
import Likes from '../interactions/likes'

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
        />
      )
    }

    if (audioTypes.includes(fileType)) {
      return (
        <audio
          className="post-audio"
          src={`/content/audio/${fileName}`}
        />
      )
    }

    return null;
  }

  handleMessage(e){
    // debugger
    let message = {
      body: "initiate",
      sender: this.props.currentUser.id,
      receiver: this.props.artist.id,
      initialConnectingMessage: true
    }
    // debugger
    this.props.sendMessage(message).then(() =>{
      this.props.clickMessage(this.props.artist.id)
    })
  }
  
  render() {
    let artist;
    if (!this.props.users){
      artist = null
    } else {
      artist = this.props.users[this.props.artist]
    }
    return !artist ? null :  (
      <div className="post-container">

        <div className="post-header">
          <img className="post-profile-pic" src={`/content/image/${artist.propic}`} alt=""/>
          <Link to={`/portfolios/${this.props.artist}`}>{artist.username}</Link>
          <p>{this.props.post.description}</p>
          <p>{this.props.post.createdAt.split('T')[0]}</p>
        </div>

        <div className="post-content">
          {this.renderContent()}
          <Likes likers={this.props.post.likers} postId={this.props.post._id}/>
        </div>
        <Likes likers={this.props.post.likers} postId={this.props.post._id}/>
      </div>
    )
  }
}