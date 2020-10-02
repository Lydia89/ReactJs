import React, { Component } from 'react';
class Card extends Component{


constructor(){
    super()
    this.ClickBrazil = this.ClickBrazil.bind(this)
}


    ClickBrazil() {


        fetch('https://restcountries.eu/rest/v2/name/brazil')
          .then(res => res.json())
          .then(Data => {
            // console.log(Data)
    
            this.setState({ name: Data[0].name });
            this.setState({ capital: Data[0].capital });
            this.setState({ flag: Data[0].flag });
            this.setState({ population: Data[0].population });
            this.setState({ region: Data[0].region });
            // console.log(this.state.capital)
          })
    
        console.log('brazil')
      }






    render(){
      
return(
    <div>

<Card></Card>
{/** <Card name={this.props.name}
 capital={this.props.capital} 
 flag={this.props.flag}  
 population={this.props.population}
 region={this.props.region}
 />*/}






    </div>
)





    }

}export default Card