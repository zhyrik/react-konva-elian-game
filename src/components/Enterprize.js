import React, { Component } from 'react'
import { Rect } from 'react-konva'
import Konva from 'konva'

class Enterprize extends Component {
  state = {
    color: 'green'
  }
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    })
  }
  render() {
    return (
      <Rect
        x={this.props.x - 50}
        y={this.props.y - 100}
        width={100}
        height={20}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    )
  }
}

export default Enterprize