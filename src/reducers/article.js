import {
  GET_ARTICLE_DETAIL_SUCCESS,
} from '.././actions/article';

const initialState = {
  detail: {}
};

export default function article(state = initialState, action = {}) {
  switch (action.type) {
    //文章详细
    case GET_ARTICLE_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        detail: action.payload.data
      });

    default:
      return state;
  }
}