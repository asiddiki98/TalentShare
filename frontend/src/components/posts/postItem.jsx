import React from 'react';
import { Link } from "react-router-dom";

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
    return(
      <div className="post-container">

        <div className="post-header">
          <Link to={`/portfolios/${this.props.artist.id}`}>Artist Name</Link>
          <button onClick={this.handleMessage}>Send Message</button>
        </div>

        <div className="post-content">
          {this.renderContent()}
        </div>

      </div>
    )
  }
}