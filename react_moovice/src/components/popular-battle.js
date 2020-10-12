import React, { Component } from 'react';
import placeholder from '../img/placeholder.png'
import Card from './movie/Card';

class Popularbattl extends Component {
    constructor(){
        super()
        this.choseFilm=this.choseFilm(this)
    }

    state = {
        movies: [],
        poster_path: '',
        title: '',
        overview: '',
        currentPage: 1,
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const movies = json.results.map((elem) => {
                    return {

                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path} ` : placeholder

                    }
                })
                this.setState({ movies })
                /*
                    this.setState({
      
                        title: json.results[0].title,
                        posterpath: json.results[0].poster_path,
                        overview: json.results[0].overview,
                        movies: json.results
       
                    })*/
                //console.log(json.results[0].title)
                // console.log(json.results[0].poster_path)
                // console.log(json.results[0].overview)
                console.log('movice', json.results)
            })
    }
    choseFilm(){

    }



    render() {
        const {
            movies,
            currentPage
        } = this.state


        const secondIndex = currentPage * 2 - 1
        const firstIndex = secondIndex - 1
        const firstMovie = this.state.movies[firstIndex]
        const secondMovie = this.state.movies[secondIndex]
        console.log('firstMovie', firstIndex)
        console.log('firstMovie', secondIndex)
        return (
            <div className="row">

                <div className="col-6" > 
                <button  onClick={this.choseFilm}> <Card {...firstMovie} /></button>
                 </div>


                <div className="col-6" >
                    <button> <Card  {...secondMovie} /></button>
                   
                </div>



                {/**<section>
                    {this.state.movies.map((elem, index) => {
                        return (
                            <button onClick={() => this.click(elem.poster_path)} key={index} >
                                <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} style={{ width: 150, height: 250 }} />
                                <p>{elem.title}</p>
                                <p>{elem.overview}</p>

                            </button>
                        )

                    })}


                </section> */}
            </div>
        )
    }
}






export default Popularbattl