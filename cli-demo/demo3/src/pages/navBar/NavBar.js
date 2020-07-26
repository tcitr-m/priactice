import React, { Component } from 'react'

import './NavBar.scss'

/**
 * props方式类似具名插槽
 */

 class NavBar extends Component {
	 render() {
		const {leftSlot, cneterSlot, rightSlot} = this.props
		return (
			<div className="nav-bar">
				<div className="item left">{leftSlot}</div>
				<div className="item cneter">{cneterSlot}</div>
				<div className="item right">{rightSlot}</div>
			</div>
		 )
	 }
 }
export default class PropsMethod extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const navLeft = <div>返回</div>
		const navCenter = <div>购物街</div>
		const navRight = <div>更多</div>

		return (
			<NavBar leftSlot={navLeft} cneterSlot={navCenter} rightSlot={navRight}/>
		)
	}
}
