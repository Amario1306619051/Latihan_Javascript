import React, { Component } from 'react'

export default class randomnumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            emoji: [ 
            "๐",
            "๐",
            "๐",
            "๐คฃ",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐ค",
            "๐คฉ",
            "๐ค",
            "๐คจ",
            "๐",
            "๐",
            "๐ถ",
            "๐",
            "๐",
            "๐ฃ",
            "๐ฅ",
            "๐ฎ",
            "๐ค",
            "๐ฏ",
            "๐ช",
            "๐ซ",
            "๐ด",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐คค",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐ค",
            "๐ฒ",
            "โน",
            "๐",
            "๐",
            "๐",
            "๐",
            "๐ค",
            "๐ข",
            "๐ญ",
            "๐ฆ",
            "๐ง",
            "๐จ",
            "๐ฉ",
            "๐คฏ",
            "๐ฌ",
            "๐ฐ",
            "๐ฑ",
            "๐ณ",
            "๐คช",
            "๐ต",
            "๐ก",
            "๐ ",
            "๐คฌ",
            "๐ท",
            "๐ค",
            "๐ค",
            "๐คข",
            "๐คฎ",
            "๐คง",
            "๐",
            "๐ค ",
            "๐คก",
            "๐ฅณ",
            "๐ฅด",
            "๐ฅบ",
            "๐คฅ",
            "๐คซ",
            "๐คญ",
            "๐ง",
            "๐ค",
            "๐",
            "๐ฟ",
            "๐น",
            "๐บ",
            "๐",
            "๐ป",
            "๐ฝ",
            "๐ค",
            "๐ฉ",
            "๐บ",
            "๐ธ",
            "๐น",
            "๐ป",
            "๐ผ",
            "๐ฝ",
            "๐",
            "๐ฟ",
            "๐พ",
          ],
          qoute: [ 
            'Hidup cuma sekali',
            'Belajarlah Sampai Ke negeri Cina',
            'Jangan lupa berdoa',
            'Practice make perfect'  
            ]
        }
    }
    
    Acak = () =>{
        this.setState(
            {
                number: Math.floor(Math.random()*this.state.qoute.length)
            }
        )
    }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <h2> Generate Random number : {this.state.qoute[this.state.number]}</h2>
        <button onClick={this.Acak}>Generate me</button>
      </div>
    )
  }
}
