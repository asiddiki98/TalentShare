import { connect } from 'react-redux'
import React from 'react'
import { likePost, unlikePost } from '../../actions/post_actions'

class Likes extends React.Component {
    constructor(props) {
        super(props)

        if (this.props.likers.includes(this.props.userId)) {
            this.state = {
                liked: true
            }
        } else {
            this.state = {
                liked: false
            }
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.liked === true) {
            this.props.unlikePost(this.props.postId, this.props.userId)
            this.setState({
                liked: false
            })
        } else {
            this.props.likePost(this.props.postId, this.props.userId)
            this.setState({
                liked: true
            })
        }
    }

    render() {
        return (
            <p onClick={() => this.handleClick()}>{this.props.likers.length} likes</p>
        )
    }
}


const mstp = (state, ownProps) => {
    return {
        userId: state.session.user.id
    }
}

const mdtp = (dispatch) => {
    return {
        likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        unlikePost: (postId, userId) => dispatch(unlikePost(postId, userId))

    }
}

export default connect(mstp, mdtp)(Likes)