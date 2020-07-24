import  React, { Component } from 'react'

export default class App extends Component{
  constructor(){
    super()
    this.state = {} // 未初始化 会提示 no-useless-constructor
  }
  render() {
    return (
      <h2>Hello React-cli</h2>
    )
  }
}