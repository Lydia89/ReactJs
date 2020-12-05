import React from 'react';
import Home from '../components/Core/Home'
import Api from '../utils/Api'
class HomeContainer extends React.Component {


state={
    cities:[]
}
    componentDidMount(){
      Api.getHome()
      this.setState({
        cities:this.state.cities
      })
  console.log('HomeContainer',this.state.cities)
    }


    render() {
        return (
            <div
                className='container-fluid'
                style={{
                    fontFamily: 'Montserrat'
                }}>
                <div
                    className='row'>
                    <div
                        className={'col-lg-4 col-md-8 col-12'}>
                        <p>
                            <Home   title={this.props.h1}></Home>
                            Je vérifie que les 2 mots : Voleur et <span style={{ fontFamily: 'serif' }}>Voleur</span> ont une police d'écriture différente
            </p>
                    </div>
                    <div
                        className='col-lg-8 col-md-4 col-12'>
                        Une autre phrase
          </div>
                </div>
            </div>
        );
    }
}

export default HomeContainer;