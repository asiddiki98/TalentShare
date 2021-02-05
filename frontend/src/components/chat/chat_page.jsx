import React from 'react';
import 'whatwg-fetch'
import openSocket from 'socket.io-client'
import ChatBox from './chat_box';
import { fetchAllUsers } from '../../actions/user_actions';
import {connect} from 'react-redux';
import { getUsers, parseMessages } from '../../util/message_util';
import { fetchMessages, receiveMessage } from '../../actions/message_action';
import '../../assets/chat/chat_page.scss'

//chat is over all chat. gets all chat related to current user. will have 
//individual chat component to that this component parses messages to
class ChatPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            //a userid current user is chatting with to display
            dispChat: null,
            isMounted: false
        }

        this.handleCloseChat = this.handleCloseChat.bind(this)
        // debugger
    }

    handleChatClick(userId){
        return e => {
            
            this.setState({dispChat: userId})
        }
    }

    componentDidMount(){
        this.props.fetchAllUsers().then(() => {
            this.props.fetchMessages(this.props.currentUser._id)
        }).then(() => {
            this.setState({isMounted: true})
        })
        this.socket = openSocket('http://localhost:8000',{
            withCredentials: false,
            extraHeaders: {
                "my-custom-header": "abcd"
            }, 
            transport: ['websocket']
        });
        this.socket.emit("connect user", this.props.currentUser._id)
        this.socket.on('chat message', message => {
            // debugger
            this.props.receiveMessage(message)
        })
        
        
    }

    componentWillUnmount(){
        this.socket.emit("disconnect user", this.props.currentUser._id)
    }

    handleCloseChat(){
        
        this.setState({dispChat: null})

    }
    

    render(){
        
        let chatbox = null;
        if(this.state.isMounted && this.state.dispChat){
            chatbox = (          
                <ChatBox otherUser={this.props.otherUsers[this.state.dispChat]}
                    currentUser={this.props.currentUser}
                    messages={this.props.messages[this.state.dispChat]}
                    receiveMessage={this.props.receiveMessage}
                    socket={this.socket}
                    handleCloseChat={this.handleCloseChat}
                />  
            )    
        }
        return (
            <div id="chat-page">
                <div id="chat-users-list">
                    <h1>Messages</h1>
                    <ul>
                        {
                            this.props.otherUsers ? 
                            Object.values(this.props.otherUsers).map((user,idx) => {
                                // debugger
                                return <li onClick={this.handleChatClick(user._id)} 
                                        key={user._id}>
                                        <div>{user.username}</div>
                                    </li>
                            }) : null
                        }
                    </ul>
                </div>
                {chatbox}
            </div>

        )
    }
}

const mSTP = (state,ownProps) => {
    return{
        currentUser: state.session.user,
        //{userId: [messages to and from current user and userId]}
        messages: parseMessages(state),
        //{userId: user with user id}
        otherUsers: getUsers(state),
        
    }
}

const mDTP = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchMessages: userId => {
            return dispatch(fetchMessages(userId));
        },
        receiveMessage: message => {
            return dispatch(receiveMessage(message));
        }
    }
}

export default connect(mSTP, mDTP)(ChatPage)