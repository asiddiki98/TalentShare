import React from 'react';
import { Link } from "react-router-dom";

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // renderPhoto(){

  // }
  
  // renderVideo(){

  // }

  render() {
    return(
      <div className="post-container">
        <video src={`/content/video/${this.props.post.filename}`} controls ></video>
        {this.props.post._id}
      </div>
    )
  }
}