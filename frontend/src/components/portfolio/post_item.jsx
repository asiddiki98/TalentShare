/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({post, viewPost}) => {
    const imageTypes = ['jpeg', 'jpg', 'png'];
    let content;
    if (!post) {
        content = <div>Nothing to see here</div>;
    } else { 
        content = imageTypes.includes(post.filename.split('.')[1]) ? <img src={`/content/image/${post.filename}`}/> : <video src={`/content/video/${post.filename}`} controls></video>;

    }

    return (
        <div onClick={viewPost} className="post-item">
            {content}
        </div>
    )
}