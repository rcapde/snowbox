import React, { Component } from 'react';
import 'aframe';
import Snow from './components/snow';
import Tree from './components/tree';
import Moon from './components/moon';

class App extends Component {
  componentWillMount(){
    this.state = {
      flakes: [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
      ]
    };

  }
  render() {
    const snowleft = this.state.flakes.map((flake)=>{
      let from1 = Math.floor(Math.random() * 15) - 15;
      let from2 = 12;
      let from3 = Math.floor(Math.random() * 30) - 15;
      let to1 = 0;

      let from = from1 + ' ' + from2 + ' ' + from3;
      let to = from1 + ' ' + to1 + ' ' + from3;
      return(
        <Snow from={from} to={to}/>
      );
    })
    const snowright = this.state.flakes.map((flake)=>{
      let from1 = Math.floor(Math.random() * 15) - 0;
      let from2 = 12;
      let from3 = Math.floor(Math.random() * 30) - 15;
      let to1 = 0;

      let from = from1 + ' ' + from2 + ' ' + from3;
      let to = from1 + ' ' + to1 + ' ' + from3;
      return(
        <Snow from={from} to={to}/>
      );
    })

    return (
      <a-scene vr-mode-ui="enabled: false">
        <a-assets>
           <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous"/>
        </a-assets>

        <a-sky color="#1f263b" />
        <a-plane position="0 0 0" rotation="-90 0 0" color="white" width="1000" height="1000" repeat="1000 1000" transparent="true"/>
        <a-sound src="src: url(solarquest.mp3)" autoplay="true" position="0 2 5" volume="10" loop="true"></a-sound>

        <a-entity position="0 0 0"
                geometry="primitive: plane; width: 30; height: 30;" rotation="-90 0 0"
                material="color:#FFFAFA;">
        </a-entity>

        <Moon scale={"5 5 5"} rotation={"0 0 0"} position={"1 45 -80"} />

        <Tree scale={"1 1 1"} rotation={"0 0 0"} position={"1 2 -9"} />
        <Tree scale={"1 0.8 1"} rotation={"0 3 5"} position={"-5 2 -7"} />
        <Tree scale={"1 1 1"} rotation={"3 0 -8"} position={"5 2 -5"} />

<a-entity cursor position="0 0 -5"></a-entity>


        {snowright}
        {snowleft}
      </a-scene>
    );
  }
}

export default App;
