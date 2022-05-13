import React, { Component } from 'react'

export default class randomnumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            nama: 'amar'
        }
    }
    

  render() {
    return (
      <div>
        <h2> Generate Random number : {this.state.number}</h2>
        <button>Generate me</button>
      </div>
    )
  }
}
