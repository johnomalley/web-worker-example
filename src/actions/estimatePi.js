import {SET_PI_VALUE} from './types'

const worker = new Worker('/worker.js')

export default () =>
  dispatch => {
    dispatch({type: SET_PI_VALUE, value: undefined})
    worker.postMessage('calculatePi')
    worker.onmessage = ({data: {pi}}) => dispatch({type: SET_PI_VALUE, value: pi})
  }
