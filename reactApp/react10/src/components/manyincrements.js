import React, { Component } from 'react'

export default class manyincrements extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    OneIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    fiveIncrement = () => {
        this.OneIncrement()
        this.OneIncrement()
        this.OneIncrement()
        this.OneIncrement()
        this.OneIncrement()
    }

  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.OneIncrement}> Increment </button>
      </div>
    )
  }
}
