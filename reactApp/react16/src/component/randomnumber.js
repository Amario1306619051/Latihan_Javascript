import React, { Component } from 'react'

export default class randomnumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            emoji: [ 
            "😀",
            "😁",
            "😂",
            "🤣",
            "😃",
            "😄",
            "😅",
            "😆",
            "😉",
            "😊",
            "😋",
            "😎",
            "😍",
            "😘",
            "😗",
            "😙",
            "😚",
            "🙂",
            "🤗",
            "🤩",
            "🤔",
            "🤨",
            "😐",
            "😑",
            "😶",
            "🙄",
            "😏",
            "😣",
            "😥",
            "😮",
            "🤐",
            "😯",
            "😪",
            "😫",
            "😴",
            "😌",
            "😛",
            "😜",
            "😝",
            "🤤",
            "😒",
            "😓",
            "😔",
            "😕",
            "🙃",
            "🤑",
            "😲",
            "☹",
            "🙁",
            "😖",
            "😞",
            "😟",
            "😤",
            "😢",
            "😭",
            "😦",
            "😧",
            "😨",
            "😩",
            "🤯",
            "😬",
            "😰",
            "😱",
            "😳",
            "🤪",
            "😵",
            "😡",
            "😠",
            "🤬",
            "😷",
            "🤒",
            "🤕",
            "🤢",
            "🤮",
            "🤧",
            "😇",
            "🤠",
            "🤡",
            "🥳",
            "🥴",
            "🥺",
            "🤥",
            "🤫",
            "🤭",
            "🧐",
            "🤓",
            "😈",
            "👿",
            "👹",
            "👺",
            "💀",
            "👻",
            "👽",
            "🤖",
            "💩",
            "😺",
            "😸",
            "😹",
            "😻",
            "😼",
            "😽",
            "🙀",
            "😿",
            "😾",
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
                number: Math.floor(Math.random()*this.state.emoji.length)
            }
        )
    }
  render() {
    return (
      <div>
        <h2> Generate Random number : {this.state.emoji[this.state.number]}</h2>
        <button onClick={this.Acak}>Generate me</button>
      </div>
    )
  }
}
