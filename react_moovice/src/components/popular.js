import React, { Component } from 'react';
import placeholder from '../img/placeholder.png'
import Card from './movie/Card'
class Popular extends Component {


    state = {
        movies: [],
        poster_path: '',
        title: '',
        overview: '',


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



    render() {
        const {
            movies
        } = this.state

        return (
            <div>

                {movies.map((elem, index) => {
                    return <Card key={index} title={elem.title} description={elem.description} imgUrl={elem.imgUrl} />
                })}


                {/**  <Card
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


                </section>*/}

            </div>
        )
    }
} export default Popular