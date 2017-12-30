import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/constant';

const posts = (state = {}, action) => {
  const {
    posts
  } = action;
  switch (action.type) {
    case RECEIVE_POSTS:
      return posts.reduce((map, obj) => {
            map[obj.name] = obj
            return map
          }, { ...state }
        )


    default:
      return state
  }
}

export default posts;
