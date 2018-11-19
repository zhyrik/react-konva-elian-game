import React, { Component } from 'react'
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class Enterprize extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={this.props.height - 100}
        width={100}
        height={20}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default Enterprize