import axios from 'axios';
const KEY = 'AIzaSyCqKEhVNhjWu6AzCibm_GkxX1rDlUwi5Ic';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  },
});
