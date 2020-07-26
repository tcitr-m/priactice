import React, { Component } from "react"
import PropTypes from "prop-types";

export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    this.props.itemClick(index)
  }

  render() {
    const {titles} = this.props
    const {currentIndex} = this.state

    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div className="tab-item" onClick={() => this.itemClick(index)} key={index}>
                <span className={`title ` + (index === currentIndex ? 'active' : '')}>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
TabControl.propTypes = {
	titles: PropTypes.array,
	itemClick: PropTypes.func,
	e: PropTypes.object
}
