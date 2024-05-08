import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar.jsx";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    propic: state.session.user.propic,
    loggedIn: state.session.isAuthenticated,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createPost: (
      <div>
        <div
          className="create-post-button"
          onClick={() => dispatch(openModal("createPost"))}
        >
          New Post
        </div>{" "}
      </div>
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
