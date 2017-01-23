
import React, { Component } from 'react';
import 'aframe';

class Snow extends Component {
  render() {

    return (
      <a-entity id="fading-cube"
                geometry="primitive: sphere; radius:0.05;"
                material="opacity: 1; color:white;"
                >
        <a-animation attribute="position" dur="4000" from={this.props.from} to={this.props.to} delay={Math.floor(Math.random() * 4000) + 100} repeat="indefinite"></a-animation>
      </a-entity>
    );
  }
}

export default Snow;
