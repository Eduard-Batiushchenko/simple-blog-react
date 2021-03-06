import { Dispatch } from 'react';
import api from '../../services/blog-api';
import actions from '../actions/postsActions';
import {
  HandlePostsActions,
  HandlePostActions,
  postBlogActions,
  IPost,
} from '../../types/post';

const handleAllPostsOperator =
  () =>
  async (dispatch: Dispatch<HandlePostsActions>): Promise<void> => {
    try {
      dispatch(actions.handlePostsRequest());
      const response = await api.handlePosts();
      dispatch(actions.handlePostsSuccess(response.data));
    } catch (error) {
      dispatch(
        actions.handlePostsError('Произошла ошибка, при загрузке постов'),
      );
    }
  };

const handleSinglePostOperator =
  (querry: string) =>
  async (dispatch: Dispatch<HandlePostActions>): Promise<void> => {
    try {
      dispatch(actions.handlePostRequest());
      const response = await api.handlePost(querry);
      dispatch(actions.handlePostSuccess(response.data));
      return;
    } catch (error) {
      dispatch(actions.handlePostError('Произошла ошибка, при загрузке поста'));
    }
  };

const postNewBlogOperator =
  (body: IPost) =>
  async (dispatch: Dispatch<postBlogActions>): Promise<void> => {
    try {
      dispatch(actions.postBlogRequest());
      const response = await api.postBlog(body);
      dispatch(actions.postBlogSuccess(response.data));
      return;
    } catch (error) {
      dispatch(
        actions.postBlogError('Произошла ошибка, при деплое поста' + error),
      );
    }
  };

export {
  handleAllPostsOperator,
  handleSinglePostOperator,
  postNewBlogOperator,
};
