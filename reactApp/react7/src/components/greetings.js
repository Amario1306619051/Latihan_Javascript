import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>
          <h1>Hallo {this.props.name} from {this.props.town}</h1>
      </div>
    )
  }
}
