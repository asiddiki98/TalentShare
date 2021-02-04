import React from 'react';
import { connect } from 'react-redux';
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
        this.props.update(this.state).then(this.props.closeModal);
    }

    render() {
        const {closeModal, user} = this.props;
        return (
            <div className="edit-portfolio-container">
                <div>HELLO WORLD</div>
                <div className="closemodal" onClick={closeModal}>✕</div>
            </div>
        )
    }

}

const mstp = ({ session }) => ({
    user: session.user
});

const mdtp = dispatch => ({
    update: user => dispatch(updateProfile(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(EditPortfolio);