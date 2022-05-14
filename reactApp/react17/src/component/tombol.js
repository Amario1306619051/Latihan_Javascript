import React, { Component } from 'react'

export class tombol extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hello'
      }
    }

    Berubah(){
        this.setState(
            {
                message : 'Goodbye'
            }
        )
    }
  render() {
    return (
      <div>
          <h2>{this.state.message}</h2>
          <button onClick={this.Berubah.bind(this)}> Click me</button>
      </div>
    )
  }
}

export default tombol