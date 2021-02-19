import React from 'react';
import { connect } from 'react-redux';
import { removeShow } from '../../actions/filter_action';
import { closeModal } from '../../actions/modal_actions';
import CommentIndex from '../interactions/comment_index';
import { openModal } from '../../actions/modal_actions';
import { clickPost } from '../../actions/filter_action';
import { deletePost } from '../../actions/post_actions';
import { fetchPosts } from '../../actions/post_actions';

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.state.hidden = true;
        this.dropDown = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.dropDownListener = e => {
            if (!this.dropDown.contains(e.target)) this.setState({ hidden: true });
        }
        document.addEventListener('click', this.dropDownListener, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.dropDownListener);
    }

    handleClick(e) {
        this.setState({ hidden: !this.state.hidden });
        e.stopPropagation();
    }

    handleClose(e) {
        this.setState({ hidden: true });
    }

    render() {
        const {closeModal, user, post, editPost, deletePost} = this.props;
        const imageTypes = ['jpeg', 'jpg', 'png'];
        return (
            <div className="view-post-container" onClick={this.handleClose} >
                <div className="closemodal" onClick={closeModal}>✕</div>
                <div className="post-dropdown"onClick={this.handleClick}  ref={div => this.dropDown = div} >
                    •••
                    {!this.state.hidden && <div className="post-dropdown-contents" onClick={e => e.stopPropagation()}>
                        <div className="delete-post-button" onClick={() => deletePost(post._id)} >Delete</div>
                        <div className="open-edit-post" onClick={() => editPost(post._id)} >Edit</div>
                    </div>}
                </div>
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
    editPost: (postId) => {
        dispatch(clickPost(postId));
        dispatch(openModal('editPost'));
    },
    deletePost: postId =>{
        dispatch(deletePost(postId));
        dispatch(closeModal());
        dispatch(removeShow());
    } 
});

export default connect(mstp, mdtp)(ViewPost);