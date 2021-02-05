import React from 'react';
import { connect } from 'react-redux';
import { sendFile } from '../../actions/content_actions';
import { closeModal } from '../../actions/modal_actions';
import { updateProfile } from '../../actions/user_actions';
import {fetchAllUsers} from "../../actions/user_actions";

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
            <div className="edit-portfolio-container">
                <div className="title" >Edit Profile</div>
                <div className="closemodal" onClick={closeModal}>✕</div>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <label>Choose New Profile Picture: 
                        <input className="file" type="file" accept=".png, .jpg, .jpeg" onChange={this.handleFile("file")}/>
                    </label>

                    <label>Edit Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
                    </label>

                    <label>Edit Firstname:
                        <input type="text" value={this.state.firstname} onChange={this.handleChange("firstname")} />
                    </label>

                    <label>Edit Lastname:
                        <input type="text" value={this.state.lastname} onChange={this.handleChange("lastname")} />
                    </label>

                    <label>Edit Bio:
                        <input type="text" value={this.state.bio} onChange={this.handleChange("bio")} />
                    </label>

                    <button>submit</button>
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
    sendFile: file => dispatch(sendFile(file)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mstp, mdtp)(EditPortfolio);