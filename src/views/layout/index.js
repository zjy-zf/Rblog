import React, {
  Component
} from 'react'
import Navigation from './components/navigation.js'
import Footer from './components/footer.js'
import BackToUp from '../../components/backToUp.js'
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom'
import CanvasNest from 'canvas-nest.js'
import routes from '../../route/index.js'
import authHOC from '../../utils/auth.js'
import {
  getUserInfo
} from '../../actions/login.js'
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'

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

  componentWillMount() {
    const {
      actions
    } = this.props
    actions.getUserInfo();
  }

  componentDidMount() {
    console.log("初始化canvas-nest")
    // const cn = new CanvasNest(document.querySelector("body"), config);
    // this.setState({
    //   cn: cn
    // })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      this.props.actions.getUserInfo()
    }
  }

  componentWillUnmount() {
    // this.state.cn.destroy();
  }
  render() {
    return (
      <div id="app">
        <Navigation/>
        <Switch>
          {
            routes.map((route, index) => {
              if(route.private) {
                return (<Route key={index} path={route.path} component={authHOC(route.component)} exact={route.exact} />)
              } else {
                return (
                  <Route path={route.path}
                    key={index}
                    exact={route.exact}
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                  />
                )
              }
            })
          }
        </Switch>
        <Footer/>
        <BackToUp/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getUserInfo
    }, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
