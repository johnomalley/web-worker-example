import React, {PropTypes as T} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import RootContainer from './RootContainer'
import estimatePi from '../actions/estimatePi'

export const App = ({onEnter}) => (
  <Router history={browserHistory}>
    <Route path='/' component={RootContainer} onEnter={onEnter}/>
  </Router>
)

App.displayName = 'App'

App.propTypes = {
  onEnter: T.func.isRequired
}

export const mapStateToProps = () => ({})

export const mapDispatchToProps = dispatch => ({
  onEnter: () => dispatch(estimatePi())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
