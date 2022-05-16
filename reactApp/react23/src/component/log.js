import React, { Component } from 'react'

export default class Taktik extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : false
      }

      this.Keluar = this.Keluar.bind(this)
      this.Masuk = this.Masuk.bind(this)
    }

    Keluar (){
      this.setState(
        {
          isLoggedIn: false
        }
      )
    }

    Masuk (){
      this.setState(
        {
          isLoggedIn: true
        }
      )
    }
    render() {
        if (this.state.isLoggedIn = true){
            return(
                <div>
                  <h1>Hello Amario</h1>
                  <button onClick={this.Keluar}> Log out </button>
                </div>
              
            )
        } else {
            return(
            <div>
              <h1>Hello Guest</h1>
              <button onClick={this.Keluar}> Log in </button>
            </div>
            )
        } 
    }
}
