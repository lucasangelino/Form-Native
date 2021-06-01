import axios from 'axios';

export const Fetch = axios.create({
    baseURL: 'https://reqres.in/api'
});