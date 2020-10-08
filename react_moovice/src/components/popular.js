import React, { Component } from 'react';
import placeholder from '../img/placeholder.png'
import Card from './movie/Card'
class Popular extends Component {


    state = {
        movies: [],
        poster_path: '',
        title: '',
        overview: '',
        currentMovice: null,
        source:placeholder
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
                <Card
                    title={this.state.title}
                    overview={this.state.overview}
                    poster_path={this.state.poster_path} />
                    

                <section>
                    {this.state.movies.map((elem,index) => {
                        return (
                            <span  onClick={() => this.click(elem.poster_path)}  key={index} >
                                <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} style={{width:150,height:250}} />
                                <p>{elem.title}</p>
                                <p>{elem.overview}</p>

                            </span>
                        )

                    })}


                </section>
            </div>
        )
    }
} export default Popular