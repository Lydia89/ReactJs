import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from'./components/Button'

class App extends Component {
  /*
  constructor(props){
  
    super()
    //this.componentDidMount=this.componentDidMount.bind(this)
  }*/
  state = {
    name: '',
    capital: '',
    flag: '',
    population: 0,
    region: '',

  }
  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(res => res.json())
      .then(Data => {
        console.log(Data)

        this.setState({ name : Data[0].name }); 
        this.setState({ capital : Data[0].capital }); 
        this.setState({ flag: Data[0].flag }); 
        this.setState({ population: Data[0].population}); 
        this.setState({ region: Data[0].region}); 
        console.log(this.state.capital)
      })
  }
  render() {
    return (
      <div className="App">
        <p> name: {this.state.name}</p>
        <p>capital:{this.state.capital}</p>
        <p>flag :{this.state.flag}</p>
        <p> population : {this.state.population}</p>
        <p>region : {this.state.region}</p>
        <Button/>

      </div>
      
    );
  }
}

export default App;
