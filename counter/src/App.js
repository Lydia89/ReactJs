import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'



class App extends React.Component {
  constructor(){
    super()
    this.incrementCount=this.incrementCount.bind(this)

    this.decrementCount=this.decrementCount.bind(this)

  }



  state = {
    count: 1,
  }
  incrementCount(){
    this.setState({

      count : this.state.count+1

    })
  }

  decrementCount(){
    this.setState({ 
      count :Math.max (this.state.count-1 ,0)//math.max le compteur ne descende jamais en dessous de 0  Bonus1
      
     // count: this.state.count-1   pour decrement sans condition 
    })
   
   
  }
  
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <Counter  counter={this.state.count}
        incrementCountfn={this.incrementCount}
        decrementCountfn={this.decrementCount}
        
        
        ></Counter>
      
        
      </div>
    );
  }
}

export default App;
