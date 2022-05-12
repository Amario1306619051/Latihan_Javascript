import React, { Component } from 'react'

export default class manyincrements extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    oneIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    fiveIncrement = () => {
        this.oneIncrement()
        this.oneIncrement()
        this.oneIncrement()
        this.oneIncrement()
        this.oneIncrement()
    }
  render() {
    return (
      <div>
          <h1> {this.state.count}</h1>
          <button onClick={() => this.fiveIncrement}> Increment </button>
      </div>
    )
  }
}
