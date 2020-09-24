import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'
import HeartRate from './components/HeartRate'
import Temperature from './components/temperature'
import Water from './components/water'
//import Slider from'./components/core/Slider'


//import Icon from './components/core/Icon';


let MIN_TEMPERATURE = -20
let MAX_TEMPERATURE = 40
let MIN_HEART = 80
let MAX_HEART = 180
let MIN_STEPS = 0
let MAX_STEPS = 50000



class App extends Component {
  constructor() {
    super()
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)

  }

  state = {
    water: 0,
    heart: 120,
    temperature: -10,
    steps: 3000
  }

  onHeartChange(val) {
    this.calculateWater(val,'heart')
    this.setState({
      heart: val
    })


  }
  onStepsChange(val) {
    this.calculateWater(val,'steps')
    this.setState({
      steps: val
    })

  }

  onTemperatureChange(val) {
    this.calculateWater(val,'temperature')
    this.setState({
      temperature: val
    })


  }
  calculateWater(val, element) {
    if (element ==='temperature') {
      console.log('calculette water temperature')
         if (element === 'temperature') {
      console.log('App#calculateWater#Temperature');
      //Si le slider Temperature est au dessus de 20°C
      if (val > 20) {
        if (this.state.heart > 120) {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((val- 20) * 0.02) + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + ((val- 20) * 0.02) + ((this.state.heart - 120) * 0.0008)
            })
          }
        } else {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((val - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + (val- 20) * 0.02
            })
          }
        }
      } else {
        //Si le slider est en dessous de 20 °C
        if (this.state.heart > 120) {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + ((this.state.heart - 120) * 0.0008)
            })
          }
        } else {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 
            })
          }
        }
      }
    } //if (element === 'temperature')
    }  if (element ==='steps') {
      console.log('calculette water step')
    }











    
    if (element ==='heart') {
      console.log('calculette water heart')
    }
  }









  render() {
   

    return (

      <div class="container-fluid" >



        <Water water={this.state.water}
          onChange={this.calculateWater}>



        </Water>
        <Person steps={this.state.steps}
          onChange={this.onStepsChange}
          max={MAX_STEPS}
          min={MIN_STEPS}

        ></Person>
        <HeartRate heart={this.state.heart}
          min={MIN_HEART}
          max={MAX_HEART}
          onChange={this.onHeartChange}

        ></HeartRate>
        <Temperature temperature={this.state.temperature}
          max={MAX_TEMPERATURE}
          min={MIN_TEMPERATURE}
          onChange={this.onTemperatureChange}

        ></Temperature>


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
