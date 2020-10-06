import React, { Component } from 'react'

class Card extends Component {


    render() {
        // console.log(this.props);

        return (
            <div>
                <p>name:{this.props.name}</p>
                <p>height:{this.props.height} m</p>
                <p>weight:{this.props.weight} Kg</p>
                <p>type:{this.props.type}</p>
                <button onClick={this.props.onClick}>
                    <img src="https://pokeres.bastionbot.org/images/pokemon/1.png"
                        style={{ width: 250, height: 250 }} alt="" />
                </button>
            </div>
        )
    }
}
export default Card