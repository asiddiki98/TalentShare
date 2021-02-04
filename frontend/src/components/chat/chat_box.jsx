import React from 'react';
import '../../assets/chat/chat.scss'
import '../../assets/chat/chat_page.scss'
import ContentEditable from 'react-contenteditable';

export default class ChatBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleEnter = this.handleEnter.bind(this)
        this.contentEditable = React.createRef();
    }

    updateBody(e){
      
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const message = {
                body: this.state.body,
                sender: this.props.currentUser.id,
                receiver: this.props.otherUser._id,
                initialConnectingMessage: false
            }
        
        // debugger
        if(message.body.length !== 0){

            this.props.socket.emit('chat message', message);
            this.setState({body: ""})
        }
    }

    handleEnter(e){
        if(e.key === "Enter"){
            e.preventDefault();
            const message = {
                body: this.state.body,
                sender: this.props.currentUser.id,
                receiver: this.props.otherUser._id,
                initialConnectingMessage: false
            }
        
            debugger
             if(message.body.length !== 0){

                this.props.socket.emit('chat message', message);
                this.setState({body: ""})
            }
        }
    }


    render(){
        // debugger
        return(
            <div className="chatbox">
                <div className="chatbox-header">
                    <div>{this.props.otherUser.username}</div>
                    <button onClick={e => this.props.handleCloseChat(this.props.otherUser._id)}>X</button>
                </div>
                <div className="chatbox-message-container">
                    <ul>
                        {
                            this.props.messages.filter(message => {
                                return !message.initialConnectingMessage
                            }).map((message,idx) => {
                                return <li key={idx}>{message.body}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="chatbox-input">
                    <form onSubmit={this.handleSubmit}>
                        <ContentEditable innerRef={this.contentEditable}
                            html={this.state.body}
                            onChange={this.updateBody}
                            className="chatbox-input-area"
                            onKeyDown={this.handleEnter}
                        />
                        {/* <input type="text" value={this.state.body} onChange={this.updateBody}/> */}
                        <button>
                            <img src="https://img.icons8.com/nolan/64/filled-sent.png"/>
                        </button>
                    </form>
                </div>
            </div>
        )
    }

}