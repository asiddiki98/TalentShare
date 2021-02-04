/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({post}) => {
    const content = post.filename.includes(".jpeg", ".png", ".jpg") ? <img src={`/content/image/${post.filename}`}/> : <video src={`/content/video/${post.filename}`} controls></video>;
    
    return (
        <div className="post-item">
            {content}
        </div>
    )
}