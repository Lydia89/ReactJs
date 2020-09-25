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



  renderadd() {
    if (this.state.activeTab) {
        return (
            <section>
              <h1>lkjlkj</h1>
            </section>
        );
    } else {
        return (
            <section>
                <h1>Vous n'êtes pas connecté</h1>
            </section>
        );
    }
}





  render() {
    return (
      <div className="App">
        <Button add={this.state.activeTab}
             onClick={this.apparaitre} > Add</Button>

        <Button > List</Button>
        <Button> Pay</Button>
        <Add />
        < List />
        <Pay />
        {this.renderadd()}
      </div>
    );
  }
}

export default App;
