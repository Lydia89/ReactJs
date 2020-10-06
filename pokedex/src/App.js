import React, { Component } from 'react';

import './App.css';
import Card from './Card'
import Button from './Button'

class App extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
  }

  state = {
    id: '',
    name: '',
    height: 0,
    type: [],
    weight: 0,
    img: ''
  }


  componentDidMount() {
    this.click("1")
    /*
        fetch('https://pokeapi.co/api/v2/pokemon/1')
    
          .then(res => res.json())
          .then(json => {
            console.log(json)
            this.setState({
              name: json.name,
              height: json.height,
              weight: json.weight,
              type: json.types[0].type.name,
            })
            //console.log(json.name)
           // console.log(json.height)
           // console.log(json.weight)
           // console.log(json.types[0].type.name)
          })
    */
  }

  click(val) {
    //console.log("je click")
    this.setState({
      id: val


    })
    console.log(this.state.id)


    fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)

      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: json.types[0].type.name,
        })

      })


  }


  render() {

    return (
      <div className="App">

        <Card
          name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
          type={this.state.type}

          onClick={() => this.click("1")}

        ></Card >
        <Button
          name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
          type={this.state.type}
          onClick={() => this.click("2")}

        ></Button>



      </div >
    );
  }
}

export default App;
