import axios from 'axios';

export const fetchMessages = userId => {
    return axios.get(`/api/messages/user/${userId}`);
}

export const sendInitialMessage = message => {
    // debugger
    return axios.post('/api/messages/', message);
}