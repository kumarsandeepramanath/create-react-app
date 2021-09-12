import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9uMy5uOS2b4Fi9TO9njwr8KvjVrswi3GbpWwMkUCuJc',
  },
});
