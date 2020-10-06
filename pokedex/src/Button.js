import React, { Component } from 'react'

class Button extends Component {
constructor(){
    super()
    this.state ={
        img:""
    }

}




    render() {



        return (
            <div>

                <button><img src="https://pokeres.bastionbot.org/images/pokemon/2.png" style={{ width: 250, height: 250 }} alt=""


                    name={this.props.name}
                    height={this.props.height}
                    weight={this.props.weight}
                    type={this.props.type}
                    onClick={this.props.onClick}


                /></button>
            </div>
        )
    }
}
export default Button