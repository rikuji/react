'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')

    super()
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => { this.setState({ time: this.state.time + 1 }) }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate timer', this.state, nextState)

    return this.props.time !== nextProps.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount timer')
    clearInterval(this.timer)
  }

  render () {
    return (
      <div> Timer: {this.state.time}</div>
    )
  }
}

export default Timer
