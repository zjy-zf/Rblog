import {
  combineReducers
} from 'redux';
import menu from './menu';
import home from './home';
import article from './article.js'
import technology from './technology.js'
import essays from './essays.js'
import resources from './resources'
import login from './login.js'
import category from './category.js'

const rootReducer = combineReducers({
  menu,
  home,
  article,
  technology,
  essays,
  resources,
  login,
  category
});

export default rootReducer;