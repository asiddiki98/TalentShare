import { connect } from 'react-redux';
import React from 'react';
import { sendFile } from '../../actions/content_actions';
import { closeModal } from '../../actions/modal_actions';
import { patchPost } from '../../actions/post_actions';

class EditPostForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(field) {
        return e => this.setState({[field]: e.currentTarget.files[0]});
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleCategoryClick(field){
        return e => this.setState({category: field})
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        const formData = new FormData();
        formData.append('caption', "post-pic");
        formData.append('file', this.state.file);
        if(this.state.file) {
            this.props.sendFile(formData).then(() => {
                this.state.filename = this.props.content.filename;
                return this.props.editPost(this.state);
            }).then(this.props.closeModal);
        } else {
            this.props.editPost(this.state).then(this.props.closeModal);
        }
    }

    render(){
        const {closeModal} = this.props;
        return (
            <div className="create-post-container">
                <div className="create-post-header">Edit Post</div>
                <div className="closemodal" onClick={closeModal}>✕</div>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <label> 
                        <div className="create-post-input-label">Post:</div>
                        <input type="file" accept=".png, .jpg, .jpeg, mp4, mov, mp3, wav, mp4" onChange={this.handleFile("file")}/>
                    </label>
                    <label>
                        <div className="create-post-input-label">Description:</div>
                        <input type="text" value={this.state.description} onChange={this.handleChange('description')}/>
                    </label>
                    <label>
                        <div className="create-post-input-label">Category:</div>
                        <div onClick={this.handleCategoryClick("Art")} className={this.state.category === 'Art' ? `create-post-category chosen` : `create-post-category` }>Art</div>
                        <div onClick={this.handleCategoryClick("Photography")} className={this.state.category === 'Photography' ? `create-post-category chosen` : `create-post-category` }>Photography</div>
                        <div onClick={this.handleCategoryClick("Music")} className={this.state.category === 'Music' ? `create-post-category chosen` : `create-post-category` }>Music</div>
                        <div onClick={this.handleCategoryClick("Dance")}className={this.state.category === 'Dance' ? `create-post-category chosen` : `create-post-category` }>Dance</div>
                    </label>
                    <button>submit</button>
                </form>
                {this.state.errors ? <div id="create-post-form-errors">{this.state.errors}</div> : null}
            </div>
        )
    }

}

const mSTP = (state = {}, ownProps) => {
    return {
        currentUserId: state.session.user._id,
        content: state.ui.content,
        errors: state.errors.posts,
        post: state.entities.posts[state.ui.filters.postId]
    }
}

const mDTP = dispatch => {
    return {
        editPost: post => dispatch(patchPost(post)),
        closeModal: () => dispatch(closeModal()),
        sendFile: file => dispatch(sendFile(file))
    }
}

export default connect(mSTP,mDTP)(EditPostForm)