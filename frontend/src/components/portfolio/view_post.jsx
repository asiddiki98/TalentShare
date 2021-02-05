import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
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