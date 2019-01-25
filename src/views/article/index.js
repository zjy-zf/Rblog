import React, {
  Component
} from 'react'
import {
  Route
} from 'react-router-dom'

class Article extends Component {
  render() {
    const {
      routes
    } = this.props
    return (
      <div className="container">
  				{
            routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))
          }
  			</div>
    )
  }
}

export default Article