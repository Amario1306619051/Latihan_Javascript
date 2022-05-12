import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    AlexanderArnold = () =>{
        this.setState({message: 'Thankyou for Subscribe'})
    }
  render() {
    return (
      <div>
          <h1> {this.state.message} </h1>
          <button onClick={this.AlexanderArnold}> Subscribe </button>
      </div>
    )
  }
}

export default Message
