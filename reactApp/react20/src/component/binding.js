import React, { Component } from 'react'

export class binding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         number : "kunyuk"
      }

      this.Pencet = this.Pencet.bind(this)
    }

    Pencet(){
        this.setState(
            {
                number: "santai"
            }
        )
    }
  render() {
    return (
      <div>
          <h2>The number : {this.state.number}</h2>
          <button onClik={this.Pencet}> Klik the button</button>
      </div>
    )
  }
}

export default binding