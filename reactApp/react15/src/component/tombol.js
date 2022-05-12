import React, { Component } from 'react'

class tombol extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    Tambah = () => {
        this.setState(
            {
                number: this.state.number + 1
            }
        )
    }

    Kurang = () => {
        this.setState(
            {
                number: this.state.number - 1
            }
        )
    }

  render() {
    return (
      <div>
          <h2>Angka : {this.state.number} </h2>
          <button onClick={this.Kurang}> - </button>
          <button onClick={this.Tambah}> + </button>
      </div>
    )
  }
}

export default tombol