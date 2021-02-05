import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleFile(field) {
        return e => this.setState({[field]: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('caption', "profile-pic");
        if (this.state.file) {
            this.props.sendFile(formData).then(() => this.props.updateUser({
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                propic: this.props.content.filename,
                bio: this.state.bio,
                _id: this.state._id
            })).then(this.props.closeModal);
        } else {
            this.props.updateUser({
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                propic: this.state.propic,
                bio: this.state.bio,
                _id: this.state._id
            }).then(this.props.closeModal);
        }
    }

    render() {
        const {closeModal, user} = this.props;
        return (
            <div className="view-post-container">
                <div className="closemodal" onClick={closeModal}>✕</div>
                <div className="content-container"></div>
            </div>
        )
    }

}

const mstp = ({ session, ui }) => ({
    user: session.user,
    content: ui.content
});

const mdtp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(ViewPost);