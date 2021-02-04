import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import "../../assets/portfolio.scss";
import {fetchAllUsers} from "../../actions/user_actions";

class Portfolio extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchUserPosts(this.props.match.params.user_id);
    }

    render() {
        const {user, posts} = this.props;
        return !user ? null : (
            <div className="portfolio-container">
                <div className="profilepic">
                    <img src={`content/image/${user.propic}`} alt="" />
                </div>

                <div className="edit-profile-button">Edit Profile</div>

                <div className="bio">{user.bio}</div>
                <PostIndex posts={posts} user={user} />
            </div>
        )
    }
}
   

const mstp = ({entities}, ownProps) => {
    return {
        user: entities.users[ownProps.match.params.user_id],
        posts: Object.values(entities.posts)
    }
};

const mdtp = dispatch => ({
    fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});


export default connect(mstp, mdtp)(Portfolio);