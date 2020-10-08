import React, { Component } from 'react';
import placeholder from '../img/placeholder.png'
//import Card from './movie/Card'
class Popularbattl extends Component {

    state = {
        movies: [],
        poster_path: '',
        title: '',
        overview: '',
        currentMovice: null,
        source: placeholder,
        currentPage :1,
    }


    componentDidMount() {

        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.results) {
                    this.setState({
                        source: json.poster_path
                    })

                }
                this.setState({

                    title: json.results[0].title,
                    posterpath: json.results[0].poster_path,
                    overview: json.results[0].overview,
                    movies: json.results

                })
                //console.log(json.results[0].title)
                // console.log(json.results[0].poster_path)
                // console.log(json.results[0].overview)
                console.log('movice', json.results)
            })
    }

    click(poster_path) {
        fetch(poster_path)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    currentMovice: json
                })
            })

    }

    render() {
    return (
            <div>
                Popular
               


<section>
          {this.state.currentPage ?
            (<div className="poke-info">
              
              <div>
              <p><b>title:</b> {this.state.currentPokemon.name}</p>
                <p><b>Height :</b>{this.state.currentPokemon.height}</p>
                <p><b>Weight :</b>{this.state.currentPokemon.weight}</p>
                <p><b>Type :</b>{this.state.currentPokemon.types[0].type.name}</p>

              </div>
            </div>) :
            (<h1>Please select film</h1>)
          }
        </section>







                <section>
                    {this.state.movies.map((elem) => {
                        return (
                            <button onClick={() => this.click(elem.poster_path)} >
                               {/**<img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} style={{ width: 150, height: 250 }} /> */} 
                                <p>{elem.title}</p>
                                <p>{elem.overview}</p>

                            </button>
                        )

                    })}


                </section>
            </div>
        )
    }
}

 
 
 
 
 
 export default Popularbattl