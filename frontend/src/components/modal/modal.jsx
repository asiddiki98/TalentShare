import React from 'react';
import { connect } from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import EditPortfolio from '../portfolio/edit_portfolio';
import ViewPost from '../portfolio/view_post';
import CreatePostForm from '../posts/createPostForm';

const Modal = ({modal, closeModal}) => {
    if(!modal) return null;
    let component;

    switch (modal) {
        case 'editPortfolio':
            component = <EditPortfolio />;
            break;
        // case 'createPost':
        //     component = <CreatePostForm />;
        //     break;
        case 'viewPost':
            component = <ViewPost />;
            break;
        case 'createPost':
            component = <CreatePostForm />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" >
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mstp = ({ui}) => ({
    modal: ui.modal
});

const mdtp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp,mdtp)(Modal);