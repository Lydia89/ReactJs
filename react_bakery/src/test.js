import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './component/Add'
import List from './component/List'
import Pay from './component/Pay'
import Button from './component/core/Button'

class App extends Component {
  constructor(props) {
    super(props)

    this.apparaitre = this.apparaitre.bind(this)


  }

  state = {
    activeTab: 'add',
    items: [],

  }


  apparaitre() {
    this.setState({
      add: 'add',
      // alert("bonjour")

   })
    console.log(this.state)

  }



 /*<div className="App">
        <Button add={this.state.activeTab}
             onClick={this.apparaitre} > Add</Button>

        <Button    list={this.state.activeTab}
                   onClick={this.apparaitre}> List</Button>
        <Button    pay={this.state.activeTab}
                    onClick={this.apparaitre}> Pay</Button>
        <Add />
        < List />
        <Pay />
       
      </div> */



  render() {
    if(this.state.activeTab){
        <h1>bonjour</h1>

    }else{
        <Button add={this.state.activeTab}
        onClick={this.apparaitre} > Add</Button>
        
    }
  }
}

export default App;
