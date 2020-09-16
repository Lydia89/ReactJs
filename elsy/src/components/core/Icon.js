import React, { Component } from 'react';

class Icon extends Component {
render(){
    return(
        <span class="material-icons" style ={{fontSize:100}}>
        <p>{this.props.name} </p>
     </span>
   
   
    );
}


}
export default Icon;