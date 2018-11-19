import React, { Component } from 'react'
import { Stage, Layer, Rect, Text } from 'react-konva'
import Field from './components/Field'
import Enterprize from './components/Enterprize'
import Shot from './components/Shot'
import './App.css'

class App extends Component {
  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    enterprizePositionX: 300,
    shotItems: []
  }
  createShot () {
    const shotItems = [...this.state.shotItems]
    shotItems.push(Math.random()*500)
    this.setState({
      shotItems
    })
  }
  render() {
    return (
      <Stage width={window.innerWidth} height={this.state.height} onClick={this.createShot.bind(this)}>
        <Layer>
          <Field width={this.state.width} height={this.state.height} />
          <Enterprize y={this.state.height} x={this.state.enterprizePositionX} />
          {this.state.shotItems.map((item, index) => {
            return <Shot y={this.state.height - 100} x={this.state.enterprizePositionX} key={index} />
          })}
        </Layer>
      </Stage>
    )
  }
}

export default App
