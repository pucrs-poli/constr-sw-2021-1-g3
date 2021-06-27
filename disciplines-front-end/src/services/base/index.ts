import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://3.138.169.204:8081'
});