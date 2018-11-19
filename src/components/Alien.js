import React, { Component } from 'react'
import { Rect } from 'react-konva'

class Alien extends Component {
  render() {
    return (
      <Rect
        x={this.props.position.x}
        y={this.props.position.y}
        width={100}
        height={20}
        fill={'white'}
      />
    )
  }
}

export default Alien