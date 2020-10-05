

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button'
import Card from './components/Card'


class App extends Component {

  /*
    constructor() {
      super()
      this.clickFrance = this.clickFrance.bind(this)
      this.clickBrazil = this.clickBrazil.bind(this)
      this.clickCroatia = this.clickCroatia.bind(this)
  
    }
  */


  state = {
    name: '',
    capital: '',
    flag: '',
    population: 0,
    region: '',
    active: ''

  }


  componentDidMount() {
    this.click("france")
    //const url = `https://restcountries.eu/rest/v2/name/france`

    /*
    fetch(url)

      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          name: data[0].name,

          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region,



        })



      })*/
  }
  click(countery) {

    const url = `https://restcountries.eu/rest/v2/name/${countery}`
    fetch(url)

      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region,

        })


      })


  }


//////// pour trois methode 
  /*
  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(res => res.json())
      .then(data => {
         console.log(data)

        this.setState({ name: data[0].name });
        this.setState({ capital: data[0].capital });
        this.setState({ flag: data[0].flag });
        this.setState({ population: data[0].population });
        this.setState({ region: data[0].region });
        // console.log(this.state.capital)
      })

  }

  clickFrance() {

    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        this.setState({ name: data[0].name });
        this.setState({ capital: data[0].capital });
        this.setState({ flag: data[0].flag });
        this.setState({ population: data[0].population });
        this.setState({ region: data[0].region });
        // console.log(this.state.capital)
      })

    console.log('france')
  }

  clickBrazil() {

    fetch('https://restcountries.eu/rest/v2/name/brazil')
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        this.setState({ name: data[0].name });
        this.setState({ capital: data[0].capital });
        this.setState({ flag: data[0].flag });
        this.setState({ population: data[0].population });
        this.setState({ region: data[0].region });
        // console.log(this.state.capital)
      })

    console.log('brazil')
  }

  clickCroatia() {
    fetch('https://restcountries.eu/rest/v2/name/croatia')
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        this.setState({ name: data[0].name });
        this.setState({ capital: data[0].capital });
        this.setState({ flag: data[0].flag });
        this.setState({ population: data[0].population });
        this.setState({ region: data[0].region });
        // console.log(this.state.capital)
      })

    console.log('ClickCroatia')

  }
*/
///////////////////////////////////////////////////



  render() {


    return (

      <div className="App">
         <h3>ME-Country</h3>

        <Button isSelected={this.state.active === "france"}
          /* onClick={this.clickFrance}*/
          onClick={this.click.bind(this,"france")}
        
        >

          France </Button>


        <Button isSelected={this.state.active === "brazil"}
          /*onClick={this.clickBrazil}*/
          onClick={this.click.bind(this,"brazil")}

        > Brazil</Button>
        <Button isSelected={this.state.active === "croatia"}
          /* onClick={this.clickCroatia}*/
          onClick={this.click.bind(this,"croatia")}> Croatia</Button>



        <Card name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region}
        >

        </Card>
      {/*{this.state.active === 'france' && <Button onClick={this.click.bind(this,"france")} />}
        {this.state.active === 'brazil' && <Button onClick={this.click.bind(this,"brazil")} />}
    {this.state.active === 'croatia' && <Button onClick={this.click.bind(this,"croatia")} />} */}
      </div>


    )
  }


}

export default App;
