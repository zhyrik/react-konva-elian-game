import React, { Component } from 'react'
import { Circle } from 'react-konva'

class Shot extends Component {
  state = {
    y: this.props.y,
    x: this.props.x,
    spead: this.props.spead
  }

  componentDidMount () {
    const muveShot = (spead) => {
      let interval = setInterval(() => {
        let y = this.state.y
        y += spead
        if (y < -10 || y > 1000) clearInterval(interval)
        else {
          this.setState({
            y
          })
        }
      }, 30)
    }
    muveShot(this.state.spead)
  }

  render() {
    return (
      <Circle x={this.state.x} y={this.state.y} radius={4} fill="white" />
    )
  }
}

export default Shot