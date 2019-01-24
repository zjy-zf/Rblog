import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/base.scss';
import './styles/icon/iconfont.css'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import Root from './containers/Root';
const store = configureStore()

window.AV = require('leancloud-storage')

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();