import axios, { AxiosResponse } from 'axios';
import routes from '../routes';
import { ICreatePost, IPost } from '../types/post';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const handlePosts = (): Promise<AxiosResponse<IPost[]>> =>
  axios.get(`${routes.post}`);
const handlePost = (querry: string): Promise<AxiosResponse<IPost>> =>
  axios.get(`${routes.post}/${querry}`);
const postBlog = (post: ICreatePost): Promise<AxiosResponse<IPost>> =>
  axios.post(`${routes.post}`, post);

export default {
  handlePosts,
  postBlog,
  handlePost,
};
