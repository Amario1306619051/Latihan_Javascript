import React, { Component } from 'react'

export default class userGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : true
      }
    }
    render() {
        if (this.state.isLoggedIn){
            return(
                <div>Hello Amario</div>
            )
        } else {
            return<div>Hello Guest</div>
        } 
    }
}
