import { arrayOf } from 'prop-types';
import React, { Component } from 'react';
import Card from './movie/Card';


class Mylist extends Component {

    constructor() {
        super()
        this.getFromLocalStorage = this.getFromLocalStorage.bind(this)
        this.state = {

            movies: [],
            movieIds: this.getFromLocalStorage()

        }
        // console.log('getFromLocalStorage',this.getFromLocalStorage())
        console.log('movieIds', this.state.movieIds)
    }
    componentDidMount() {

        //const url = `http://api.themoviedb.org/3/movie/${this.state.movieIds[0]}?api_key=134d92c3d72c8501356da2496ace8c7e`

        // je crée mon array de fetch/promesse  qui contient les requetes film par film en fonction de leur ID

        const arrayFetch = this.state.movieIds.map(elem => {

            const url = `http://api.themoviedb.org/3/movie/${elem}?api_key=134d92c3d72c8501356da2496ace8c7e`// elem ==> id des films

            return fetch(url)
                .then(res => res.json())

        })
        // ici je récupère toute les réponses de toute mes requete 

        Promise.all(arrayFetch)
            .then(results => {
            
                console.log('mylist', results )
                const newArray = results.map(elem => {
                    return {
                        title:elem.title,
                        description:elem.overview,
                        imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path} `
                    }

                })

                this.setState({
                    movies: newArray
                })
            })

            .catch(err => console.error(err))

    }


    getFromLocalStorage() {

        //return JSON.parse(localStorage.getItem('my-list'));
        const mylist = JSON.parse(localStorage.getItem('my-list'))
        console.log('mylist', mylist)
        return mylist


    }

    render() {

        return (
            <div>
                My List
                < button onClick={this.getFromLocalStorage} > Clique</button >
                {this.state.movies.map((elem, index) => {
                    return (
                        <Card key={index}
                            title={elem.title}
                            description={elem.description}
                            imgUrl={elem.imgUrl}
                        ></Card>
                    )
                })}
            </div >
        )
    }
} export default Mylist




        // fetch(`http://api.themoviedb.org/3/movie/${this.state.movieIds}?api_key=134d92c3d72c8501356da2496ace8c7e`)
        //  .then(res => res.json())
        //  .then(json => json[0]);

        // const promises = this.state.movieIds.map(lyly => fetchMovies(lyly));
        // Promise.all(promises)
        //   .then((lyly) => {
        // receives an array of responses
        // console.log('movieIds', this.state.movieIds);

        //    });