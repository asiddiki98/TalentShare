import React from 'react';

export default ({post}) => {
    const content = post.filename.includes(".jpeg", ".png") ? <img src={`/content/image/${post.filename}`}/> : <video src={`/content/video/${post.filename}`} controls ></video>;
    return (
        <div className="post-item">
            <div className="category">{post.category}</div>
            {content}
            <div className="description">{post.description}</div>
        </div>
    )
}