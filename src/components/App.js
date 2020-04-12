import React, { Component } from 'react'

import JyankenBox from './JyankenBox'
import ScoreBox from './ScoreBox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerHnad: null,
      computerHand: null
    }
  }

  handlePon(playerHnad) {
    const computerHand = Math.floor(Math.random() * 3)
    this.setState({
      playerHnad,
      computerHand
    })
  }

  render() {
    return (
      <div>
        <h1>じゃんけんポン！</h1>
        <JyankenBox
          pon={i => this.handlePon(i)} />
        <ScoreBox
          playerHnad={this.state.playerHnad}
          computerHand={this.state.computerHand} />
      </div>
    )
  }
}

export default App
