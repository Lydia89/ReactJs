
import React from 'react';

class Counter extends React.Component {



render(){
    return(
        <div className="Counter">
            
            <h2>{this.props.count}</h2>
          <button onClick={this.props.incrementCountfn} style={{width :250,height:50,backgroundColor:'red' }}  >+</button>
          <button onClick={this.props.decrementCountfn}   style={{width :250 ,height:50,backgroundColor:'green' }}>-</button>

        </div>
    )
}



}
export default Counter