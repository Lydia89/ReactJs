import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (


            <div className="btn-group   btn-group-toggle" data-toggle="buttons">

                <button   className="btn btn-outline-primary   border-secondary     text-secondary"
                      onClick={this.props.onClick}  >
                    {this.props.children}
                    {this.props.isSelected}
                  

                   


              
                </button>

              


                {/* <button children={this.props}
                        isSelected={this.props}
                         onClick={this.props}>List</button>
                  
                <button children={this.props}
                    isSelected={this.props}
                    onClick={this.props}>Pay</button> */}
            </div>

        )

    }

} export default Button