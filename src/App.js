import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Enterprize from './components/Enterprize'
import './App.css';

class App extends Component {
  state = {
    height: window.innerHeight
  }
  render() {
    return (
      <Stage width={window.innerWidth} height={this.state.height}>
        <Layer>
          <Enterprize height={this.state.height} />
        </Layer>
      </Stage>
    );
  }
}

export default App;
