import React, { Component } from 'react';

class Button extends Component {
   
/*

    constructor() {

        super()
        this.handleClick = this.handleClick.bind(this)
      }
    
    handleClick() {
    this.setState({
        text:'send'
    })
      console.log(this.state)  
      }
    */
   /*<button 
             onClick={this.props.onClick} >
            </button>*/
    render() {
        return (
           
                <div>
                <button  className= {this.props.isSelected.toString() ? '  btn btn-secondary': ' btn btn-light '  }
                 onClick={this.props.onClick} >
                        
                       {this.props.children}
                     
                    
                </button>
                
             </div>
        )
    }


} export default Button