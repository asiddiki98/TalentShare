import { connect } from 'react-redux';
import MainPage from './main_page';

const mstp = ({ posts }) => {
  let postCollection;
  posts ? postCollection = Object.values(posts) : postCollection = null
  return {
    posts: postCollection
  };
}

// const mapDispatchtoProps = dispatch => {
//   return {
//     null: null
//   };
// };

export default connect(mstp, null)(MainPage);