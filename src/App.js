import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import Field from './components/Field'
import Enterprize from './components/Enterprize'
import Alien from './components/Alien'
import Shot from './components/Shot'
import './App.css'

class App extends Component {
  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    enterprizePositionX: 300,
    shotItems: [],
    aliens: [
      {x: 100, y: 100}
    ]
  }
  createShot () {
    const shotItems = [...this.state.shotItems]
    shotItems.push(Math.random())
    this.setState({
      shotItems
    })
  }

  muveEnterprize = (event) => {
    this.setState({
      enterprizePositionX: event.evt.clientX
    })
  }

  creatElian (count) {
    const aliens = []
    let x = 0
    let y = 10
    for (let i = 0; i < count; i++) {
      x += 150
      if (x > this.state.width - 200) {
        y += 50
        x = 150
      }
      aliens.push({x, y})
    }
    this.setState({
      aliens
    })
  }

  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={this.state.height}
        // onClick={this.createShot.bind(this)}
        onMouseMove={this.muveEnterprize}
        onClick={this.creatElian.bind(this, 28)}
      >
        <Layer>
          <Field width={this.state.width} height={this.state.height} />
          {this.state.aliens.map((position, index) => {
            return <Alien position={position} key={index} />
          })}
          <Enterprize y={this.state.height} x={this.state.enterprizePositionX} />
          {this.state.shotItems.map((item, index) => {
            return <Shot 
              y={this.state.height - 100}
              x={this.state.enterprizePositionX}
              spead={-5}
              key={index} />
          })}
        </Layer>
      </Stage>
    )
  }
}

export default App
