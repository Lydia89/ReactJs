import React, { Component } from 'react';


class Add extends Component {

    //
   
    render() { 

        return (
            <div className="container" >

                <form className="form-inline " style={{visibility:"hidden"}}     >
                    <input type="text" className="form-control" placeholder="item" />
                    <button type="submit" className="btn btn-primary ">Add</button>
                </form>
        
       
            </div>

        )
        
    }


} export default Add