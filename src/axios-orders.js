import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6b8e4.firebaseio.com/'
});

export default instance;