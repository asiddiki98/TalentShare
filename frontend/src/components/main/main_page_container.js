import { connect } from 'react-redux';
import MainPage from './main_page';

const mstp = ({ posts }) => {
  let postCollection = Object.values(posts);
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