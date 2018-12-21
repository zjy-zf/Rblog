import {
    GET_ARTICLE_DETAIL_SUCCESS,
} from '.././actions/article';

const initialState = {
  detail: {}
};

export default function article(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ARTICLE_DETAIL_SUCCESS:
      return Object.assign({}, initialState, {detail: action.payload.data});
    default:
      return state;
  }
}
