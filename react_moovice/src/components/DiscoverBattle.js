import React, { Component } from 'react';
import Card from './movie/Card'
//import placeholder from '../img/placeholder.png'
///import moment from 'moment'
import { getLatestMovies } from '../service/network'
class Battle extends Component {
    constructor() {
        super()
        this.cardClick = this.cardClick.bind(this)
        this.state = {
            currentPage: 1,
            movies: [],
            originallist: []

        }
    }
    componentDidMount() {

        // Bonusssss
        getLatestMovies().then(movies => {
            this.setState({
                originallist: movies,
                movies: [movies[0], movies[1]]
            })

        })


        /*
    
    
            const TODAY = moment().toISOString();
            const NEXT_WEEK = moment().add(1, 'week').toISOString()
    
            const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=134d92c3d72c8501356da2496ace8c7e`
    
    
            fetch(url)
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
                    this.setState({
                        originallist: movies,
                        movies: [movies[0], movies[1]]
                    })
    
                })
    */
    }
    cardClick(id) {
        console.log('battalll', id)

        //il faut que j'augmente mon currentPage
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () => {
            //il faut enregestre le film cliqué 

            const mylist = JSON.parse(localStorage.getItem('my-list'))
            if (!mylist.includes(id)) {
                mylist.push(id)
                localStorage.setItem('my-list', JSON.stringify(mylist))

            }
            console.log('mylist battle', mylist)
            // il faut remplacer les deux ancien film par les deux suivant 
            const secondIndex = this.state.currentPage * 2 - 1
            const firstIndex = secondIndex - 1
            //console.log('discoverbattel secondIndex', secondIndex)
            // console.log('discoverbattel firstIndex', firstIndex)
            this.setState({
                movies: [this.state.originallist[firstIndex], this.state.originallist[secondIndex]]
            })


        })



    }
    render() {
        return (
            <div className="row" >

                {this.state.movies.map((one, index) => (

                    <div className="col-6 " key={index} onClick={() => this.cardClick(one.id)}>
                        <Card {...one}></Card>
                    </div>

                ))}
            </div>
        )
    }
} export default Battle