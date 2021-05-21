import { createSelector } from 'reselect';

const getAllPosts = state => state.posts.posts;
const getCurrentPost = state => state.posts.currentPost;

export { getAllPosts, getCurrentPost };
