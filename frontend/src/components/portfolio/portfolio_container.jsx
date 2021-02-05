import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import {fetchAllUsers} from "../../actions/user_actions";
import { openModal } from '../../actions/modal_actions';
import "../../assets/portfolio.scss";

class Portfolio extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchUserPosts(this.props.match.params.user_id);
    }

    componentDidUpdate(){
        this.props.fetchUserPosts(this.props.match.params.user_id);
    }


    render() {
        const {currentUser, user, posts, editProfile, fetchUserPosts, viewPost} = this.props;
        return !user ? null : (
            <div className="portfolio-container">
                <div className="profilepic">
                    <img src={`content/image/${user.propic}`} alt="" />
                </div>
                <div className="name">{user.firstname} {user.lastname}</div>

                {currentUser._id === user._id ? editProfile : null}

                <div className="bio">{user.bio}</div>
                <PostIndex viewPost={viewPost} fetchUserPosts={fetchUserPosts} posts={posts} user={user} />
            </div>
        )
    }
}
   

const mstp = ({entities, session}, ownProps) => {
    // debugger
    return {
        user: entities.users[ownProps.match.params.user_id],
        currentUser: session.user,
        posts: Object.values(entities.posts)
    }
};

const mdtp = dispatch => ({
    fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    editProfile: (<div className="edit-profile-button" onClick={() => dispatch(openModal('editPortfolio'))}>Edit Profile</div>),
    viewPost: () => dispatch(openModal('viewPost'))
});


export default connect(mstp, mdtp)(Portfolio);