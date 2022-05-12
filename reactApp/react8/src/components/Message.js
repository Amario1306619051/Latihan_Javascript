import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome Visitor'
        }
    }
 
    AlexanderArnold = () =>{
        const number = 0;
        if (number % 2 == 0){
            this.setState({message: 'Thankyou for Subscribe'})
            number += 1
        }
        else if (number %2 != 0){
            this.setState({message: "Odd Subscriber"})
            number += 1
        }    
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
