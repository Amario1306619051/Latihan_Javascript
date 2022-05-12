import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome Visitor'
        }
    }    
  render() {
    return (
      <div>
          <h1> {this.state.message} </h1>
          <button> Subscribe </button>
      </div>
    )
  }
}

export default Message
