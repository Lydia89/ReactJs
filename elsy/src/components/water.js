import React, { Component } from 'react';
import Icon from '../components/core/Icon';



class Water extends Component{
/*
    calc(){
        this.props.calculateWater(this.props.temperature)
    }
*/

render(){
    return(
        <div class="box col-md-2 col-6"  >

                

                <span style={{ color: '#3A85FF' }} > <Icon name="local_drink" ></Icon> </span>

                 <p> { this.props.water} L</p> 
                     {this.props.temperature}
                    
                </div>
    )
}


}export default Water