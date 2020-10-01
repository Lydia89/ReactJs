import React, { Component } from 'react';

class Button extends Component { 


    //"btn btn-outline-primary border-secondary text-secondary"
    //this.props.isSelected.toString() ? 'btn btn-secondary' :   'btn btn-light'} 
    // ${"border-secondary text-light"}
    
    render() {
        return (
            <div>
            <button  className= {this.props.isSelected.toString() ? '  btn btn-secondary': ' btn btn-light '  }
             onClick={this.props.onClick}
                     >
                   {this.props.children}
                 
                
            </button>
            
         </div>
        )
        

    }

} export default Button