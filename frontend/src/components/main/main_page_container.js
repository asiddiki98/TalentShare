import { connect } from 'react-redux';
import MainPage from './main_page';

const mstp = (state, ownProps) => {
  return {
    posts: state.entities.posts
  };
}

const mapDispatchtoProps = dispatch => {
  return {
    null: null
  };
};

export default connect(mstp,null)(MainPage);