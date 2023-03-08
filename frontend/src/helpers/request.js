import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001',
    validateStatus: false,
});

export default request;