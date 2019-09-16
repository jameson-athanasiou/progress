import React, { Component } from 'react'
import FileSystemLoader from './FileSystemLoader'

const DURATION = 10000
const INCREMENT = 10

class App extends Component {
  state = {
    progress: 0,
  }

  bumpProgress = amount => {
    const { progress } = this.state
    let newAmount = amount + progress <= DURATION ? progress + amount : DURATION
    this.setState({ progress: newAmount })
  }

  componentDidMount() {
    let interval

    interval = setInterval(() => {
      const { progress } = this.state
      const percentage = progress / DURATION
      console.log(`${parseInt(percentage * 100, 10)}%`)
      let newAmount = INCREMENT + progress <= DURATION ? INCREMENT + progress : DURATION
      this.setState({ progress: newAmount })
      if (progress >= DURATION) {
        clearInterval(interval)
      }
    }, INCREMENT)
  }

  render() {
    return (
      <>
        <button onClick={() => this.bumpProgress(700)}>Increase</button>
        <FileSystemLoader />
      </>
    )
  }
}

export default App
