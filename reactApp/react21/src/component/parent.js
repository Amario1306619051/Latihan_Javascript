import React, { Component } from 'react'
import Child from './child'

class parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)

    }
  render() {
    return (
      <div>
          <Child />
      </div>
    )
  }
}

export default parent