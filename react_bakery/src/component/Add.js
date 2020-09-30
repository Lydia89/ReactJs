import React, { Component } from 'react';
import Slider from '../component/core/Slider'
//import Slider from 'rc-slider';
//import 'rc-slider/assets/index.css';


class Add extends Component {

    constructor() {
        super()
        this.updateInput = this.updateInput.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)
       
    }

    state = {
        input: "",
        price: 1
    }

    updateInput(evt) {
        this.setState({ input: evt.target.value }, () => {
            console.log(this.state.input)
        })

    }/*

    this.setState({ price: evt.target.value },()=>{
        console.log(evt.target.price)
    });*/
    updatePrice(val) {
        this.setState({
            price: val
        })

         console.log(this.state.price)
    }

    submitForm(evt) {
        this.props.callback(this.state.input, this.state.price)
    }

  

    render() {

        return (
            <div className="container" >

                
                    <input input={this.state.input} type="text" onChange={this.updateInput} className="form-control" placeholder="item" />
                    <button className="btn btn-primary " onClick={this.submitForm}>Add</button>
                

                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    value={this.state.price}
                    onChange={this.updatePrice}
                    callback={this.props.callback }
                />

                {this.state.price}€


            </div>

        )

    }


} export default Add
/*  <Slider

                    value={this.state.price}
                    onChange={this.updatePrice}
                    callback={this.props.addItem}
                />
                {this.state.price}€
                */