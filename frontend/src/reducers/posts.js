import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/constant';

const posts = (state = {items: {}}, action) => {
  const {
    posts
  } = action;
  switch (action.type) {
    case RECEIVE_POSTS:

      const posts = action.posts;

      const items =  posts.reduce((prev, post)=>{
          prev[post.id] = post
          return prev;
        }, state.items);

        return{
          ...state,
          items
        }

      default:
        return state
  }
}

export default posts;
