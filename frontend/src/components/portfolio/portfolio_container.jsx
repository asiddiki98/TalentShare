import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import "../../assets/portfolio.scss";

const Portfolio = ({user, fetchUserPosts, posts}) => {
    return (
        <div className="portfolio-container">
            <div className="profilepic">
                <img src={`content/image/${user.propic}`}/>
            </div>
            <div className="edit-profile-button">Edit Profile</div>
            <div className="bio">{user.bio}</div>

            <PostIndex posts={posts} user={user} fetchUserPosts={fetchUserPosts} />
        </div>
    )
};

const mstp = ({session, entities}) => ({
    user: session.user,
    posts: Object.values(entities.posts)
});

const mdtp = dispatch => ({
    fetchUserPosts: userId => dispatch(fetchUserPosts(userId))
});


export default connect(mstp, mdtp)(Portfolio);