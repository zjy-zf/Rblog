import Index from '../views/home/index.js'
import Technology from '../views/technology/index.js'
import Essays from '../views/essays/index.js'
import Resources from '../views/resources/index.js'
import Message from '../views/message/index.js'
import Me from '../views/me/index.js'
import Login from '../views/login/index.js'
import Register from '../views/login/register.js'
import Article from '../views/article/index.js'
import ArticleDetail from '../views/article/components/articleDetail.js'
import ArticleEdit from '../views/article/components/articleEdit.js'
import {
  Route
} from "react-router-dom";

const routes = [{
  path: '/',
  component: Index,
  exact: true
}, {
  path: '/technology',
  component: Technology
}, {
  path: '/essays',
  component: Essays
}, {
  path: '/resources',
  component: Resources
}, {
  path: '/message',
  component: Message
}, {
  path: '/me',
  component: Me,
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register
}, {
  path: '/article',
  component: Article,
  routes: [{
    path: '/article/edit',
    component: ArticleEdit,
    private: true
  }, {
    path: '/article/detail',
    component: ArticleDetail
  }]
}]

export default routes