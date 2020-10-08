import React, { Component } from 'react';
//import Popular from '../popular';


class Card extends Component{


    render(){
        return(
            <div>
                 <p>title : {this.props.title}</p>
                 <p>overview : {this.props.overview}</p>
                {/**<p> poster_path : <img src="https://image.tmdb.org/t/p/w300/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"  style={{width:150,height:150}}/></p> */}  
             <p> <img src="../../img/placeholder.png"   style={{width:150,height:150}}/></p>   
             </div>
        ) 
    }
}export default Card