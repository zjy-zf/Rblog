import React, {
  Component
} from 'react'
import {
  Route
} from 'react-router-dom'
import authHOC from '../../utils/auth.js'

class Article extends Component {
  render() {
    const {
      routes
    } = this.props
    return (
      <div className="container">
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
  			</div>
    )
  }
}

export default Article