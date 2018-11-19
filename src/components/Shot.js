import React, { Component } from 'react'
import { Circle } from 'react-konva'

class Shot extends Component {
  state = {
    y: this.props.y
  }

  componentDidMount () {
    const muveShot = () => {
      let interval = setInterval(() => {
        let y = this.state.y
        y -= 5
        console.log(y)
        if (y < -10 || y > 1000) clearInterval(interval)
        else {
          this.setState({
            y
          })
        }
      }, 30)
    }
    muveShot()
  }

  render() {
    return (
      <Circle x={this.props.x} y={this.state.y} radius={4} fill="white" />
    )
  }
}

export default Shot