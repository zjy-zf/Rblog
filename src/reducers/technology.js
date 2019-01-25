import {
  TECH_GET_ARTICLE,
  TECH_GET_ARTICLE_PENDING,
  TECH_GET_ARTICLE_SUCCESS,
} from '.././actions/technology.js';

const initialState = {
  list: [],
  total: 0,
  query: {
    pageNo: 1,
    pageSize: 10
  }
};

export default function technology(state = initialState, action = {}) {
  switch (action.type) {
    // case GET_ARTICLE_PENDING:
    //   return Object.assign({}, state, { query: action.meta })

    // 获取列表
    case TECH_GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        list: action.payload.data.records,
        total: action.payload.data.total,
        query: action.meta
      });

    default:
      return state;
  }
}