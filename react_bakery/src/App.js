
import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './component/Add'
import List from './component/List'
import Pay from './component/Pay'
import Button from './component/core/Button'
const min = 1;
const max = 10

class App extends Component {
  constructor() {
    super();

    //this.handleClick=this.handleClick.bind(this)
    this.addItem = this.addItem.bind(this)

    this.state = {
      activeTab: "add",
      items: []
    }
  }

  handleClick(activeTab) {
    this.setState({ activeTab })
    console.log(this.state)
  }

  addItem( input,price) {
    // creat un neveau obj newItem
   let newItem={
     input:input,
     price:price
   }
   // get all  recupere (state.items) on recuper un tableau
   let allItems=this.state.items
   

   allItems.push(newItem)// add  new 
   this.setState({
     items:allItems
   })
   console.log(this.state.items)

  }
 
 
  render() {
    
    return (
      <div>


        <div className="App btn-group">

          <Button isSelected={this.state.activeTab === "add"}
            onClick={this.handleClick.bind(this, 'add')}
            onChange={"todo"}
           
          > Add
            </Button>



          <Button isSelected={this.state.activeTab === "list"} onClick={this.handleClick.bind(this, 'list')}> List </Button>
          <Button isSelected={this.state.activeTab === "pay"} onClick={this.handleClick.bind(this, 'pay')}> Pay </Button>
        </div>

        {this.state.activeTab === 'add' && <Add max={max}
           min={min} 
           callback={this.addItem}/>}
        {this.state.activeTab === 'list' && <List
        items={this.state.items}
        fn= {this.props.submitForm}/>}
        {this.state.activeTab === 'pay' && <Pay />}
      </div>
    )
  }
}
export default App;




/***
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './component/Add';
import List from './component/List';
import Pay from './component/Pay';
import Button from './component/core/Button'
//import { render } from 'react-dom';
const min=1 ;
const max=10;
class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.state = {
      activeTab: "add",
      items: [],
    }
  }
  onClickTabAdd() {
    console.log('tab add click')
    this.setState({
      activeTab: 'add'
    })
  }
  onClickTabList() {
    console.log('tab  list click')
    this.setState({
      activeTab: 'list'
    })
  }
  onClickTabPay() {
    console.log('tab pay click')
    this.setState({
      activeTab: 'pay'
    })
  }
  onChange() {
    console.log ("Good")
  }
  renderContent() {
    switch(this.state.activeTab) {
      case 'add':
        return <Add min={min} max={max}></Add>;
      case 'list':
        return <List></List>;
      case 'pay':
        return <Pay></Pay>;
      default:
        return (<h1>Error</h1>)
    }
  }
  render() {
    return (
      <div>
        <Button isSelected={this.state.activeTab === 'add'} onClick={this.onClickTabAdd}>
          Add
        </Button>
        <Button isSelected={this.state.activeTab === 'list'} onClick={this.onClickTabList}>
          List
        </Button>
        <Button isSelected={this.state.activeTab === 'pay'} onClick={this.onClickTabPay}>
          Pay
        </Button>
        {this.renderContent()}*/


/* {/* {this.state.activeTab === 'add' ? <Add></Add>: (this.state.activeTab === 'list' ? <List></List> : <Pay></Pay>)} */
/*  </div>
);
}
}
export default App;
*///