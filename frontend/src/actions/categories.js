import * as api from '../utils/api';
import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from './constant';

export const requestCategories = () =>{
  return{
  type: REQUEST_CATEGORIES,
}
}

export const receiveCategories = (categories) =>{
  return{
  type: RECEIVE_CATEGORIES,
  categories
}
}

export const fetchCategories = ()  =>{
  return dispatch => {
    dispatch(requestCategories());
    return api.fetchCategories()
      .then(categories => dispatch(receiveCategories(categories)))
  }

}
