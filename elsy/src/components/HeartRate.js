import React, { Component } from 'react';

import Icon from '../components/core/Icon';
class HeartRate extends Component {
    render() { 
        return (
            
          <div class="box col-md-2 col-6" >
 
        <span   style={{color:'red'}}> <Icon name="favorite" ></Icon> </span>   
             <p>heart :{ this.props.heart}</p>
                </div>
            
        );

        }


    }
    export default HeartRate;