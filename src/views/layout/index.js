import React, {
  Component
} from 'react'
import Navigation from './components/navigation.js'
import Footer from './components/footer.js'
import BackToUp from '../../components/backToUp.js'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import CanvasNest from 'canvas-nest.js'
import routes from '../../route/index.js'
import authHOC from '../../utils/auth.js'

const config = {
  color: '0,0,0',
  count: 150,
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cn: ''
    }
  }
  componentDidMount() {
    console.log("初始化canvas-nest")
    const cn = new CanvasNest(document.querySelector("body"), config);
    this.setState({
      cn: cn
    })
  }
  componentWillUnmount() {
    this.state.cn.destroy();
  }
  render() {
    return (
      <div id="app">
        <Navigation/>
        <Switch>
          {
            routes.map((route, i) => (
              <Route path={route.path}
                key={i}
                exact={route.exact}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))
          }
        </Switch>
        <Footer/>
        <BackToUp/>
      </div>
    );
  }
}

export default Layout;