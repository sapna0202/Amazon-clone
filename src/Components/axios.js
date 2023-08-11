import axios from 'axios';

const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/clone-1d1b1/us-central1/api' //API URL (cloud function url)
})

export default instance;