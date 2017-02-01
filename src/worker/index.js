import estimatePi from './estimatePi'

onmessage = ({data}) => {
  if (data === 'calculatePi') {
    postMessage({pi: estimatePi()})
  } else {
    console.error(`unrecognized message: ${JSON.stringify(data)}`)
  }
}