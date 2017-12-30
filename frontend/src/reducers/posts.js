import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/constant';

const posts = (state = {}, action) => {
  const {
    posts
  } = action;
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts,
      }


    default:
      return state
  }
}

export default posts;
