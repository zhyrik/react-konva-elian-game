import React, { Component } from 'react'
import { Rect } from 'react-konva'

class Field extends Component {
  render() {
    return (
      <Rect 
        x={0}
        y={0}
        width={this.props.width}
        height={this.props.height}
        fill={'black'}
      />
    )
  }
}

export default Field