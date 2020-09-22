import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Doublecount from './component/doublecount'
import Counter from './component/counter'


class App extends React.Component {
  
  constructor() {
    super()
    this.incrementCount = this.incrementCount.bind(this)

    this.decrementCount = this.decrementCount.bind(this)

  }



  state = {
    count: 1,
    comp: 1
  }
  incrementCount() {
    this.setState({

      //count : this.state.count+1,
      count: Math.min(this.state.count + 1, 100),
      comp: Math.min(this.state.count + 1, 100),
      // comp  : this.state.comp +1

    })
  }

  decrementCount() {
    this.setState({
      count: Math.max(this.state.count - 1, 0),//math.max le compteur ne descende jamais en dessous de 0  Bonus1
      comp: Math.max(this.state.comp - 1, 0)
      // count: this.state.count-1   pour decrement sans condition 
    })


  }


 //


 
         
  render() {
    return (
      <div className="App">
        <h1>TV remotes</h1>
        <h2>{this.state.count}</h2>
       
        <h2>{this.props.count}</h2>
        <Doublecount   counter={this.state.count}
          incrementCountfn={this.incrementCount}
          decrementCountfn={this.decrementCount} 

        ></Doublecount>
        <h1>living room TV</h1>
        <h2>{this.state.comp}</h2>
       
        <Counter    counter={this.state.comp}
          incrementCountfn={this.incrementCount}
          decrementCountfn={this.decrementCount} >

        </Counter>


      </div>
    );
  }
}

export default App;