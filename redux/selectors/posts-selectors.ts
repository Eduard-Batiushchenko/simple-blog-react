import { IPost } from '../../types/post';

interface IState {
  posts: {
    posts: IPost[];
    error: string;
    currentPost: IPost;
  };
}

const getAllPosts = (state: IState): IPost[] => state.posts.posts;
const getCurrentPost = (state: IState): IPost => state.posts.currentPost;

export { getAllPosts, getCurrentPost };
