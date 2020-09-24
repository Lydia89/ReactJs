import React, { Component } from 'react';

import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider'
class Person extends Component {
    render() {
        return (
        
            <div class="box col-md-2 col-6" style={{color:'black'}} >
               
                <Icon name="directions_walk" ></Icon>
                
                <Slider 
          max={this.props.max}
          min={this.props.min}
          onChange={this.props.onChange}
          value={this.props.steps} >
           </Slider>
          
           { this.props.steps} steps 
           </div>
        
        );
    }
}

export default Person;
