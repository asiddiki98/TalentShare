export const parseMessages = state => {
    // debugger
    const currentUser = state.session.user._id;
    const chats = {};
    Object.values(state.entities.messages).forEach(message => {
        if(message.sender === currentUser){
            chats[message.receiver] = chats[message.receiver] || [];
            chats[message.receiver].push(message)
        }else{
            chats[message.sender] = chats[message.sender] || [];
            chats[message.sender].push(message);
        }
    })
    return chats;

}

export const getUsers = state => {
    // debugger
    const currentUser = state.session.user._id;
    const otherUsersIds = {};
    Object.values(state.entities.messages).forEach(message => {
        if(message.sender === currentUser){
            otherUsersIds[message.receiver] = true;
        }else{
            otherUsersIds[message.sender] = true;
        }
    })
    // debugger

    const otherUsers = {};
    Object.keys(otherUsersIds).forEach(userId => {
        otherUsers[userId] = state.entities.users[userId]
    })
    // debugger
    return otherUsers;
}