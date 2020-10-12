import React, { Component } from 'react';
//import Popular from '../popular';


class Card extends Component{


    render(){
       
        return(
            <div>
                 <img src={this.props.imgUrl}   alt=""   style={{width:150,height:150}}/>
                 <h5> {this.props.title}</h5>
                 <h5>{this.props.description}</h5>
            
             </div>
        ) 
    }
}export default Card