import React from 'react';

export default ({post}) => {
    const content = post.filename.includes(".jpeg", ".png", ".jpg") ? <img src={`/content/image/${post.filename}`}/> : <video src={`/content/video/${post.filename}`} controls autoplay></video>;
    return (
        <div className="post-item">
            <div className="category">{post.category}</div>
            <div>inside post index item</div>
            {content}
            <div className="description">{post.description}</div>
        </div>
    )
}