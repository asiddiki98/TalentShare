import React from 'react';
import { connect } from 'react-redux';
import { removeShow } from '../../actions/filter_action';
import { closeModal } from '../../actions/modal_actions';

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
            </div>
        )
    }

}

const mstp = ({ session, ui, entities}) => ({
    user: session.user,
    post: entities.posts[ui.filters.postId]
});

const mdtp = dispatch => ({
    closeModal: () => {
        dispatch(removeShow());
        dispatch(closeModal());
    },

});

export default connect(mstp, mdtp)(ViewPost);