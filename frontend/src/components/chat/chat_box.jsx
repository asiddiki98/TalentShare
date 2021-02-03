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
        this.setState({body: e.target.body})
    }

    handleSubmit(e){
        e.preventDefault();
 
        this.props.socket.emit('chat message', 
            {body: this.state.body,
                sender: this.props.currentUser._id,
                receiver: this.props.otherUser._id,
                initialConnectingMessage: false
            })
    }

    render(){
        return(
            <div>
                <div className="chatbox-header">
                    {this.props.otherUser.username}
                    <button onClick={e => this.props.handleCloseChat(this.props.otherUser._id)}>X</button>
                </div>
                <div className="chatbox-message-container">
                    <ul>
                        {
                            this.props.messages.map((message,idx) => {
                                return <li key={idx}>{message}</li>
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