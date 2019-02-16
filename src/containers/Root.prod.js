import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import Layout from '../views/layout/index.js';
import {
  BrowserRouter
} from 'react-router-dom';

export default class Root extends Component {
  render() {
    const {
      store
    } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </Provider>
    );
  }
}