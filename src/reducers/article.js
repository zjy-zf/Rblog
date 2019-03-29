import {
  GET_ARTICLE_DETAIL_SUCCESS,
} from '.././actions/article';

const initialState = {
  detail: {},
  edit: {
    id: undefined,
    type: 'add',
    form: [{
        value: '',
        valid: true,
        type: 'text',
        placeholder: '键入标题',
        rules: [{
          required: true,
          message: '请键入标题'
        }]
      },{
        value: '',
        name: 'tags',
        valid: true,
        type: 'text',
        placeholder: '键入标签，多标签以逗号分隔',
        rules: [{
          required: true,
          message: '请键入标签'
        }]
      },{
        type: 'select',
        value: '',
        valid: true,
        placeholder: '选择分类'
      },{
        type: 'select',
        value: '',
        valid: true,
        placeholder: '选择展示方式'
      },{
        type: 'text',
        value: '',
        valid: true,
        placeholder: '文章摘要',
        rules: [{
          required: true,
          message: '请键入摘要'
        }]
      }
    ]
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
