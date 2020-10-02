

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button'


class App extends Component {

  constructor() {
    super()
    this.Click = this.Click.bind(this)
  }

  state = {
    name: '',
    capital: '',
    flag: '',
    population: 0,
    region: '',
    active: ''

  }
  componentDidMount() {


    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(res => res.json())
      .then(Data => {
        // console.log(Data)

        this.setState({ name: Data[0].name });
        this.setState({ capital: Data[0].capital });
        this.setState({ flag: Data[0].flag });
        this.setState({ population: Data[0].population });
        this.setState({ region: Data[0].region });
        // console.log(this.state.capital)
      })
      

  }
  componentDidUpdate() {

  fetch('https://restcountries.eu/rest/v2/name/brazil')
      .then(res => res.json())
      .then(Data => {
        // console.log(Data)

        this.setState({ name: Data[0].name });
        this.setState({ capital: Data[0].capital });
        this.setState({ flag: Data[0].flag });
        this.setState({ population: Data[0].population });
        this.setState({ region: Data[0].region });
        // console.log(this.state.capital)
      })
    }

  Click() {
    this.setState({

    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <p> name: {this.state.name}</p>
        <p>capital:{this.state.capital}</p>
        <p>flag :{this.state.flag}</p>
        <p> population : {this.state.population}</p>
        <p>region : {this.state.region}</p>

        <Button isSelected={this.state.active === "france"} onClick={this.Click}
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region} >
          France </Button>
        <Button isSelected={this.state.active === "brazil"} onClick={this.Click}> Brazil</Button>
        <Button isSelected={this.state.active === "croatia"} onClick={this.Click}> Croatia</Button>

      </div>

    );
  }
}

export default App;
