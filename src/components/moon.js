
import React, { Component } from 'react';
import 'aframe';

class Moon extends Component {
  render() {

    return (
      <a-entity
         obj-model="obj: url(moon.obj); mtl: url(moon.mtl)"
         scale={this.props.scale}
         rotation={this.props.rotation}
         position={this.props.position}>
      </a-entity>
    );
  }
}

export default Moon;
