import React, { Component } from 'react';
//import Button from './Button'
class Card extends Component {


    /*    click={this.submit}
                 callback={this.props.callback}*/
    render() {
        return (
            <div className="App">
               

                <p> name: {this.props.name}</p>
                <p>capital:{this.props.capital}</p>
                <p> population : {this.props.population}</p>
                <p>region : {this.props.region}</p>
                <h1>ME-Country selector</h1>
                <p> <img src={this.props.flag} alt="" style={{width :250 ,height:250}} /> </p>


            </div>
        )
    }

} export default Card