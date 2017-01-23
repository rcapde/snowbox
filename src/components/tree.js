
import React, { Component } from 'react';
import 'aframe';

class Tree extends Component {
  render() {

    return (
      <a-entity
         obj-model="obj: url(abrenevat.obj); mtl: url(abrenevat.mtl)"
         scale={this.props.scale}
         rotation={this.props.rotation}
         position={this.props.position}>
         sound="src: url(steps.wav); on: click"
      </a-entity>
    );
  }
}

export default Tree;
