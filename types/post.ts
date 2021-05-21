export interface IPost {
  title: string;
  body: string;
  id?: number;
}

export interface ICreatePost {
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  error: string;
  currentPost: IPost;
}

export type TPost = { post: IPost };
export type TPosts = { posts: IPost[] };

interface HandlePostsSuccessAction {
  type: string;
  payload: IPost[];
}

interface HandlePostsError {
  type: string;
  payload: string;
}

interface HandlePostSuccessAction {
  type: string;
  payload: IPost;
}

interface HandlePostError {
  type: string;
  payload: string;
}

interface PostNewBlogSuccessAction {
  type: string;
  payload: IPost;
}
interface PostNewBlogErrorAction {
  type: string;
  payload: string;
}

export type HandlePostsActions = HandlePostsSuccessAction | HandlePostsError;
export type HandlePostActions = HandlePostSuccessAction | HandlePostError;
export type postBlogActions = PostNewBlogSuccessAction | PostNewBlogErrorAction;
