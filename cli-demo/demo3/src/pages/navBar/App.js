import React, {Component} from 'react'

import './NavBar'
/**
 * children方式
 */
class NavBar extends Component {
	render() {
		const {children} = this.props
		return (
			<div className="nav-bar">
				<div className="item left">{children[0]}</div>
				<div className="item cneter">{children[1]}</div>
				<div className="item right">{children[2]}</div>
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar>
					<div>返回</div>
					<div>购物街</div>
					<div>更多</div>
				</NavBar>
			</div>
		)
	}
}
