

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button'
import Card from './components/Card'


class App extends Component {

  constructor() {
    super()
    this.ClickFrance = this.ClickFrance.bind(this)
    
    this.ClickCroatia = this.ClickCroatia.bind(this)

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

  ClickFrance() {

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

    console.log('france')
  }

  
  ClickCroatia() {
    fetch('https://restcountries.eu/rest/v2/name/croatia')
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

    console.log('ClickCroatia')
  }

  render() {
    return (
      <div className="App">
        <p> name: {this.state.name}</p>
        <p>capital:{this.state.capital}</p>
        <p>flag :{this.state.flag}</p>
        <p> population : {this.state.population}</p>
        <p>region : {this.state.region}</p>

        <Button isSelected={this.state.active === "france"} onClick={this.ClickFrance}
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region} >
          France </Button>
        <Button isSelected={this.state.active === "brazil"} onClick={this.props.ClickBrazil}
        name={this.state.name}
        capital={this.state.capital}
        flag={this.state.flag}
        population={this.state.population}
        region={this.state.region}
        
        > Brazil</Button>
        <Button isSelected={this.state.active === "croatia"} onClick={this.ClickCroatia}> Croatia</Button>
<Card></Card>

        {this.state.active === 'france' && <Button onClick={this.ClickFrance} />}
        {this.state.active === 'brazil' && <Button onClick={this.ClickBrazil} />}
        {this.state.active === 'croatia' && <Button onClick={this.ClickCroatia} />}
      </div>

    );
  }
}

export default App;
