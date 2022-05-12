import React, { Component } from 'react'

class tombol extends Component {
    constructor(props){
        super(props)
        this.state = {
            number: 0
        }
    }

  render() {
    return (
      <div>
          <h2> Angka {this.state.number}</h2>
          <button> - </button>
          <button> + </button>
      </div>
    )
  }
}

export default tombol