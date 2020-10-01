import React, { Component } from 'react';


class List extends Component{

render(){
    //let arr=
    //arr=this.props.items
//const arr=this.props.items.map(function(elem){
    //console.log(elem)
//return <li>{elem}</li>
//})

    return(
        <div>
            <h5>List</h5>
       {this.props.items.map((elem) => {
  return  <li key={elem}> Produit: {elem.input}, Prix: {elem.price} €</li>
 
    })} 
    
        </div>
    )
}


}export default List