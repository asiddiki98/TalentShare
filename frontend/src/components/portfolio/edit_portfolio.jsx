import React from 'react';
import { connect } from 'react-redux';
import { sendFile } from '../../actions/content_actions';
import { closeModal } from '../../actions/modal_actions';
import { updateProfile } from '../../actions/user_actions';

class EditPortfolio extends React.Component {
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
        this.props.sendFile(formData).then(() => this.props.updateUser({
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            propic: this.props.content.filename,
            bio: this.state.bio,
            _id: this.state.id
        })).then(this.props.closeModal);
    }

    render() {
        const {closeModal, user} = this.props;
        return (
            <div className="edit-portfolio-container">
                <div>HELLO WORLD</div>
                <div className="closemodal" onClick={closeModal}>✕</div>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <label>Choose a New Profile Picture: 
                        <input type="file" accept=".png, .jpg, .jpeg" onChange={this.handleFile("file")}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

const mstp = ({ session, ui }) => ({
    user: session.user,
    content: ui.content
});

const mdtp = dispatch => ({
    updateUser: user => dispatch(updateProfile(user)),
    closeModal: () => dispatch(closeModal()),
    sendFile: file => dispatch(sendFile(file))
});

export default connect(mstp, mdtp)(EditPortfolio);