import { combineReducers } from 'redux';
import menu from './menu';
import home from './home';
import article from './article.js'
import technology from './technology.js'
import essays from './essays.js'
import resources from './resources'

const rootReducer = combineReducers({
  menu,
  home,
  article,
  technology,
  essays,
  resources
});

export default rootReducer;