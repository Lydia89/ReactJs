import React, { Component } from 'react';
//import Popular from '../popular';
import PropTypes from 'prop-types'


class Card extends Component {


    render() {

        return (
            <div>
                <img src={this.props.imgUrl} alt="" style={{ width: 150, height: 150 }} />
                <h5> {this.props.title}</h5>
                <h5>{this.props.description}</h5>

            </div>
        )
    }

}
Card.propType = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
}

Card.defaultProps = {
    title: '',
    description: '',
    imgUrl:'../img/placeholder.png',
}



export default Card