import axios from 'axios';

const API = axios.create({
    baseURL: "http://127.0.0.1:1111/v1/api/",
    timeout :1000,
    headers: {
        // 'Authorization': `${getToken()}`,
        // "Content-type": "application/json"
    },
    responseType: "json"
});

export default API