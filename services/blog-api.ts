import axios from 'axios';
import routes from '../routes';
import { ICreatePost } from '../types/post';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const handlePosts = () => axios.get(`${routes.post}`);
const handlePost = querry => axios.get(`${routes.post}/${querry}`);
const postBlog = (post: ICreatePost) => axios.post(`${routes.post}`, post);

export default {
  handlePosts,
  postBlog,
  handlePost,
};
