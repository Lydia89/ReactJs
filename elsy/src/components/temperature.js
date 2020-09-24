import React, { Component } from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider'
//import Slider from '../components/core/Slider'
class Temperatur extends Component {

    render() {


        return (
            <div class="box col-md-2 col-6" >

               
                <span style={{ color: 'yellow' }}> <Icon name=" wb_sunny" ></Icon> </span>
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.temperature} >
                </Slider>
                { this.props.temperature}°C

            </div>

        )
    }


}
export default Temperatur