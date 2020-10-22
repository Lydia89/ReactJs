import React, { Component } from 'react';
import placeholder from '../img/placeholder.png'
import Card from './movie/Card';

class Popularbattl extends Component {
    constructor() {
        super()
        this.choseFilm = this.choseFilm.bind(this)
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
                        id: elem.id,
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path} ` : placeholder

                    }
                })
                this.setState({ movies })
               // console.log('this.State.movies',this.state.movies)
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
                //console.log('movice', json.results)
            })
    }
    choseFilm(id) {
        //console.log('choseFilm ok',id)

        let mylist = JSON.parse(localStorage.getItem('my-list')) || []

        // Evité les duplicats de film enregistre

        if (!mylist.includes(id)) {
            mylist.push(id)
            localStorage.setItem('my-list', JSON.stringify(mylist))
        }
        console.log('mylist', mylist)

        this.setState({
            currentPage: this.state.currentPage + 1
        })

    }

    render() {
        const {

            currentPage
        } = this.state


        const secondIndex = currentPage * 2 - 1
        const firstIndex = secondIndex - 1
        const firstMovie = this.state.movies[firstIndex]
        if(firstMovie===undefined){
            return(<div> Films are loading,please wait !</div>)
        }
        const secondMovie = this.state.movies[secondIndex]
        console.log('firstMovie', firstIndex)
        // console.log('firstMovie', secondIndex)
        return (
            <div className="row">

                <div className="col-6" >
                    <button onClick={() => this.choseFilm(firstMovie.id)}>
                        <Card {...firstMovie} />
                    </button>
                </div>


                <div className="col-6" >
                    <button onClick={() => this.choseFilm(secondMovie.id)}>
                        <Card  {...secondMovie} />
                    </button>

                </div>

 
            </div>
        )
    }
}






export default Popularbattl