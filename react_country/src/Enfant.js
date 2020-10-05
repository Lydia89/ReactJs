import React, { Component } from 'react';
import Enfant from './components/Enfant';
class Parent extends Component {
​
    render () {
        return (
            <div>
                <Enfant    onClick={this.props.Click}> button</Enfant>
            </div>
        )
    }
}
​
export default Parent ;
​
​
class Enfant extends React.Component {

constructor(){
    super()
    this.Click=this.Click.bind(this)

}


    Click(){
console.log("je suis l'Enfant")
    }

    
​
    render() {
        return (
            <button  onClick={this.Click}></button>
        )
    }
​
}
​
export default Enfant