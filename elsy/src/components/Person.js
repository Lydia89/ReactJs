import React, { Component } from 'react';

import Icon from '../components/core/Icon';
class Person extends Component {
    render() {
        return (
        
            <div class="box col-md-2 col-6" style={{color:'black'}} >
               
                <Icon name="directions_walk" ></Icon>
                <p>steps :{ this.props.steps}</p>

            </div>
        );
    }
}

export default Person;
