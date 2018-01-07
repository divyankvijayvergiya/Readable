import * as api from '../utils/api';
import { REQUEST_POSTS, RECEIVE_POSTS } from './constant';

export const requestPosts = () =>{
  return{
  type: REQUEST_POSTS,
}
}

export const receivePosts = (posts) =>{
  return{
  type: RECEIVE_POSTS,
  posts
}
}

export const fetchPosts = (category)  =>{
  return dispatch => {
    dispatch(requestPosts());
    return api.fetchPosts(category)
      .then(posts => dispatch(receivePosts(posts)))
  }

}
