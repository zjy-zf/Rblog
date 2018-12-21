import {
  GET_ARTICLE,
  GET_ARTICLE_PENDING,
  GET_ARTICLE_SUCCESS,
} from '.././actions/article';

const initialState = {
  list: [],
  total: 0,
  query: {
    pageNo: 1,
    pageSize: 5
  }
};

export default function home(state = initialState, action = {}) {
  switch (action.type) {
    // case GET_ARTICLE_PENDING:
    //   return Object.assign({}, state, { query: action.meta })
    case GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        list: action.payload.data.records,
        total: action.payload.data.total,
        query: action.meta
      });
    default:
      return state;
  }
}
