import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POST } from '../actions/constant';

const posts = (state = {items: {}}, action) => {
  const {
    posts
  } = action;
  switch (action.type) {
    case RECEIVE_POSTS:

      const posts = action.posts;
      const post = action.post;

      const items =  posts.reduce((prev, post)=>{
          prev[post.id] = post
          return prev;
        }, state.items);

        return{
          ...state,
          items
        }

    case RECEIVE_POST:
        return post

      default:
        return state
  }
}

export default posts;
