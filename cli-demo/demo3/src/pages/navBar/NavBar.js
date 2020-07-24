import React, { Component } from 'react'

import './NavBar.scss'

export default class NacBar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<p>{this.props.children[0]}</p>
		)
	}
}
