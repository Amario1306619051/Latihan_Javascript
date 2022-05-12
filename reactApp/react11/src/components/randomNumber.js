import React, { Component } from 'react'

export default class randomNumber extends Component {

    constructor (probs){
        super(probs);
        this.state = {
            number: 0
        }
    }


  render() {
    return (
      <div>
          <h1> Random Number Generator </h1>
          <h2> Generate the random number : {this.state.number} </h2>
          <button onClick={() => {this.setState({number: Math.random*100})}}> Generate</button>
      </div>
    )
  }
}
