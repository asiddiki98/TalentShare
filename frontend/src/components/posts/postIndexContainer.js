import { connect } from 'react-redux'
import PostIndex from './postIndex'

const mstp = (state, ownProps) => {
    return {
        // posts: state.entities.posts
    }
}
const mdtp = (dispatch) => {
    return {

    }
}

export default connect(null, null)(PostIndex)