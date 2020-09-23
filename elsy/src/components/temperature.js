import React, { Component } from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider'
//import Slider from '../components/core/Slider'
class Temperatur extends Component {

    render() {


        return (
            <div class="box col-md-2 col-6" style={{ color: 'yellow' }} >

                <Icon name=" wb_sunny" ></Icon>

                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.temperature} >
                </Slider>
                { this.props.temperature}

            </div>

        )
    }


}
export default Temperatur