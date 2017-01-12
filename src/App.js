import React, { Component } from 'react';
import 'aframe';
import Snow from './snow';

class App extends Component {
  componentWillMount(){
    this.state = {
      flakes: [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
      ]
    };

  }
  render() {
    const code = this.state.flakes.map((flake)=>{
      let from1 = Math.floor(Math.random() * 30) - 15;
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
      <a-scene>
        <a-assets>
          <img id="city" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" />
           <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous"/>
        </a-assets>

        <a-sky color="#6EBAA7" />
        <a-plane position="0 0 0" rotation="-90 0 0" src="#grid" width="1000" height="1000" repeat="1000 1000" transparent="true"/>
        <a-sound src="src: url(solarquest.mp3)" autoplay="true" position="0 2 5" volume="10" loop="true"></a-sound>

        <a-entity position="0 0 0"
                geometry="primitive: plane; width: 30; height: 30;" rotation="-90 0 0"
                material="color:white;">
        </a-entity>
        {code}



      </a-scene>
    );
  }
}

export default App;
