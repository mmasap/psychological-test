import axios from 'axios';

let baseURL = '';

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://psychological-test-934b7-default-rtdb.firebaseio.com';
}

export default axios.create({ baseURL });
