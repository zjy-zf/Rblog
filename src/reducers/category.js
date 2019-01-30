import {
  GET_CATEGORY_LIST_SUCCESS
} from '../actions/category.js'

const initialState = {
  categorySelect: []
}

export default function category(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CATEGORY_LIST_SUCCESS:
      return Object.assign({}, state, {
        categorySelect: action.payload.data
      })
    default:
      return state
  }
}