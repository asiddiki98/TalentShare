import React from 'react';

export default class ChatBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    updateBody(e){
        e.preventDefault();
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const message = {body: this.state.body,
                sender: this.props.currentUser.id,
                receiver: this.props.otherUser._id,
                initialConnectingMessage: false
            }
        // debugger
        this.props.socket.emit('chat message', message);
        this.setState({body: ""})
    }

    render(){
        // debugger
        return(
            <div>
                <div className="chatbox-header">
                    {this.props.otherUser.username}
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
                        <input type="text" value={this.state.body} onChange={this.updateBody}/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}