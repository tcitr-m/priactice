import React, {Component} from 'react'

import TabControl from './TabControl';

import './style.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.titleList = ['流行', '新款', '精选']
    this.state = {
      title: '流行'
    }
  }

  itemClick(index) {
    this.setState({
      title: this.titleList[index]
    })
  }

  render() {
    return (
			<div>
				<TabControl titles={this.titleList} itemClick={index => this.itemClick(index)} />
				<h2>{this.state.title}</h2>
			</div>
		)
  }
}
