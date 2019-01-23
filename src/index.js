import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/base.scss';
import './styles/icon/iconfont.css'
import Layout from './views/layout/index.js';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter
} from 'react-router-dom';
import configureStore from './store/configureStore';
import {
  Provider
} from 'react-redux'
const store = configureStore()

window.AV = require('leancloud-storage')

ReactDOM.render(
  <Provider store={ store }>
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	</Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();