import React from 'react';
import { connect } from 'react-redux';
import { removeShow } from '../../actions/filter_action';
import { closeModal } from '../../actions/modal_actions';
import CommentIndex from '../interactions/comment_index'

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    render() {
        const {closeModal, user, post} = this.props;
        const imageTypes = ['jpeg', 'jpg', 'png'];
        return (
            <div className="view-post-container">
                <div className="closemodal" onClick={closeModal}>✕</div>
                <div className="content-container">
                    {imageTypes.includes(post.filename.split('.')[1]) ? <img src={`/content/image/${post.filename}`} alt=""/> : <video src={`/content/video/${post.filename}`} controls></video>}
                </div>

                <div className="right">
                    <div className="top">
                        <div className="name-propic">
                            <img className='pic' src={`content/image/${user.propic}`} alt='' />
                            <div className="name-time">
                                <div className="name">{user.firstname} {user.lastname}</div>
                                <div className="time" >{post.createdAt.split('T')[0]}</div>
                            </div>
                        </div>
                        <div className="description">{post.description}</div>
                    </div>
                    <CommentIndex postId={this.props.post._id}  comments={this.props.post.comments}/> 
                </div>
            </div>
        )
    }

}

const mstp = ({ ui, entities: {posts, users}}) => ({
    user: users[posts[ui.filters.postId].creator],
    post: posts[ui.filters.postId]
});

const mdtp = dispatch => ({
    closeModal: () => {
        dispatch(closeModal());
        dispatch(removeShow());
    },

});

export default connect(mstp, mdtp)(ViewPost);