import React, { Component } from 'react'

export default class angka extends Component {
    constructor (props){
        super(props)
        this.state = {
            number: 4
        }
    }
  render() {
    return (
      <div>
          <h1> {this.state.number}</h1>
          <button> - </button>
          <button> + </button>
      </div>
    )
  }
}
