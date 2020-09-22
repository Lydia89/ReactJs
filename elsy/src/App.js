import React, { Component } from 'react';
//import './App.css';

import Person from './components/Person'
import HeartRate from './components/HeartRate'
//import Slider from'./components/core/Slider'


//import Icon from './components/core/Icon';


let MIN_TEMPERATURE = -20
//let MAX_TEMPERATURE = 40
let MIN_HEART = 80
let MAX_HEART = 180
let MIN_STEPS = 0
//let MAX_STEPS = 50000



class App extends Component {
  constructor() {
    super()
    this.onHeartChange=this.onHeartChange.bind(this)

  }


   state = {
    water :0,
    heart : 120,
    temperature :-10,
    steps :3000
  }



  onHeartChange(val){
    this.setState({
    heart : val
    }) 
   

  }
  render() {
    return (


      <div class="container-fluid" >
       
        <Person    steps={this.state.steps}></Person>
        <HeartRate heart={this.state.heart}
                    min={MIN_HEART}
                    max={MAX_HEART}
                    onChange={this.onHeartChange}
        
        
        
        
        ></HeartRate>
      
        <div> <p>Bonjour!</p></div>

        <div>
          <p>Battements de coeur: {MIN_HEART} </p>
          <p>Température : {MIN_TEMPERATURE}</p>
          <p>Nombre de pas : {MIN_STEPS}</p>
        </div>


      </div>


    );
  }
}

export default App;
