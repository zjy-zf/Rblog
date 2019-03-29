import {
  ESS_GET_ARTICLE,
  ESS_GET_ARTICLE_PENDING,
  ESS_GET_ARTICLE_SUCCESS,
} from '.././actions/essays.js';

const initialState = {
  list: [],
  total: 0,
  query: {
    pageNo: 1,
    pageSize: 10
  }
};

export default function essays(state = initialState, action = {}) {
  switch (action.type) {
    // case GET_ARTICLE_PENDING:
    //   return Object.assign({}, state, { query: action.meta })
    // 获取列表
    case ESS_GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        list: action.payload.data.records,
        total: action.payload.data.total,
        query: action.meta
      });

    default:
      return state;
  }
}
