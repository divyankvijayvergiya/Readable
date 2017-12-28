import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/constant';

const categories = (state = {}, action) => {
  const {
    categories
  } = action;
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return categories.reduce((map, obj) => {
            map[obj.name] = obj
            return map
          }, { ...state }
        )


    default:
      return state
  }
}

export default categories;
