import React from 'react';
import PostItem from './post_item';

export default class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.posts = this.props.fetchUserPosts(this.props.user.id);
    }

    render() {
        return (
            <div className="posts-index-container">
                {this.posts.map(post => <PostItem key={post._id} post={post} />)}
            </div>
        )
    }
}