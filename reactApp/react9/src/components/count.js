import React, { Component } from 'react'

export default class count extends Component {
    constructor (props){
        super(props)
        this.state = {
            count: 0 
        }
    }

    Nambah = () => {
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
      <div> 
          <h3>{this.state.count}</h3>
          <button onClick={this.Nambah}> Add Count number</button>
      </div>
    )
  }
}
