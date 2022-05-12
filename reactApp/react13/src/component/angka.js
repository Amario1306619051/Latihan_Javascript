import React, { Component } from 'react'

export default class angka extends Component {
    constructor (props){
        super(props)
        this.state = {
            number: 4
        }
    }

    Tambah = () => {
        this.setState(
            {number : this.state.number + 1}
        )
    }

    Kurang = () => {
        this.setState(
            {number: this.state.number - 1}
        )
    }
  render() {
    return (
      <div>
          <h1> {this.state.number}</h1>
          <button onClick={this.Kurang}> - </button>
          <button onClick={this.Tambah}> + </button>
      </div>
    )
  }
}
