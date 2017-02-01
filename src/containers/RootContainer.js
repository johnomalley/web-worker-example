import React, {PropTypes as T} from 'react'
import {connect} from 'react-redux'
import Result from '../components/Result'
import InProgress from '../components/InProgress'
import estimatePi from '../actions/estimatePi'

export const Root = ({pi, onEstimate}) => (
  <div className='result-container'>
    <h2>{'web worker: \u03A0'}</h2>
    {pi ? (<Result pi={pi}/>) : (<InProgress/>)}
    {pi && <button type='button' className='estimate' onClick={onEstimate}>try again</button>}
  </div>
)

Root.displayName = 'Root'

Root.propTypes = {
  pi: T.number,
  onEstimate: T.func.isRequired
}

export const mapStateToProps = ({pi}) => ({
  pi: pi.value
})

export const mapDispatchToProps = dispatch => ({
   onEstimate: () => dispatch(estimatePi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)