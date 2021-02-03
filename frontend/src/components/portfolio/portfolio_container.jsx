import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import PostIndex from './post_index';

const Portfolio = ({user, fetchUserPosts}) => {
    return (
        <div className="portfolio-container">
            <div className="profilepic">
                <img src={`content/image/${user.propic}`}/>
            </div>
            <div>helloworld</div>
            <div className="edit-profile-button">Edit Profile</div>
            <div className="bio">{user.bio}</div>

            <PostIndex user={user} fetchUserPosts={fetchUserPosts} />
        </div>
    )
};

const mstp = ({session}) => ({
    user: session.user
});

const mdtp = dispatch => ({
    fetchUserPosts: userId => dispatch(fetchUserPosts(userId))
});


export default connect(mstp, mdtp)(Portfolio);