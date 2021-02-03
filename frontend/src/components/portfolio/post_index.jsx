import React from 'react';
import PostItem from './post_item';

export default class PostsIndex extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.user.id);
    }

    render() {
        return (
            <div className="posts-index-container">
                <div>inside posts index</div>
                {this.props.posts.map(post => <PostItem key={post._id} post={post} />)}
            </div>
        )
    }
}