import {
  GET_ARTICLE_DETAIL_SUCCESS,
} from '.././actions/article';

const initialState = {
  detail: {},
  edit: {
    title: {
      value: '',
      valid: false,
      type: 'text',
      placeholder: '键入标题',
      rules: [{
        required: true,
        message: '请键入标题'
      }]
    }, // 文章题目
    content: '', // 文章内容
    digest: '', // 文章摘要
    categoryId: '', //分类ID
    id: undefined,
    tags: '', //文章标签，自己填写，多个用','分隔
    showMode: '', //展示方式(1：公开；2：私有)
    articleStatus: '0', //文章状态(0：编辑中；1：已发布)
  }
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