import * as api from '../utils/api';
import { RECEIVE_CATEGORIES } from './constants';

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => {
  return dispatch => {
    return api.fetchCategories()
      .then(categories => dispatch(receiveCategories(categories)))
  }
}
