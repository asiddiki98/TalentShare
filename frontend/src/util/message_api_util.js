import axios from 'axios';

export const fetchMessages = userId => {
    return axios.get(`/api/messages/user/${userId}`);
}

export const sendInitialMessage = message => {
    return axios.post('/api/messages/', message);
}