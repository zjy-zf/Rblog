import React, { Component } from 'react'
import Navigation from './components/navigation.js'
import Footer from './components/footer.js'
import BackToUp from '../../components/backToUp.js'
import { Switch, Route } from 'react-router-dom'
import Index from '../index/index.js'
import Technology from '../technology/index.js'
import Essays from '../essays/index.js'
import Resources from '../resources/index.js'
import Message from '../message/index.js'
import Me from '../me/index.js'
import ArticleDetail from '../../components/articleDetail.js'
import ArticleEdit from '../article/index.js'
import Login from '../login/index.js'
import Register from '../login/register.js'

class Layout extends Component {
  render() {
    return (
      <div id="app">
        <Navigation/>
        <Switch>
        	<Route path="/technology"  component={ Technology }></Route>
        	<Route path="/essays"  component={ Essays }></Route>
        	<Route path="/resources"  component={ Resources }></Route>
        	<Route path="/message"  component={ Message }></Route>
          <Route path="/me"  component={ Me }></Route>
        	<Route path="/article/:articleId"  component={ ArticleDetail }></Route>
          <Route path="/edit" component={ ArticleEdit }></Route>
          <Route path="/login" component={ Login }></Route>
        	<Route path="/register" component={ Register }></Route>
          <Route path="/"  component={ Index }></Route>
        </Switch>
        <Footer/>
        <BackToUp/>
      </div>
    );
  }
}

export default Layout;
