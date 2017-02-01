import React from 'react'

const numberOfDots = 10

const dots = (() => {
  let result = ''
  for (let i = 0; i < numberOfDots; i++) result += '.'
  return result
})()

const animatedDot = 'o'

export default class InProgress extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {ticks: 0, forward: true}
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const {state} = this
      const ticks = state.ticks + 1
      const forward = ticks % numberOfDots === 0 ? !state.forward: state.forward
      this.setState({ticks, forward})
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {ticks, forward} = this.state
    const rawPosition = ticks % numberOfDots
    const position = forward ? rawPosition : numberOfDots - rawPosition - 1

    const message = 'in progress ' + dots.slice(0, position) + animatedDot + dots.slice(position + 1)

    return (
      <div className='in-progress'>
        {message}
      </div>
    )
  }
}

InProgress.displayName = 'InProgress'
