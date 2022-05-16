import React, { Component } from 'react'
import Child from './child'

class parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Amario'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(parameter){
        alert(`Hello ${this.state.parentName} from ${parameter}`)

    }
  render() {
    return (
      <div>
          <Child gH={this.greetParent}/>
      </div>
    )
  }
}

export default parent