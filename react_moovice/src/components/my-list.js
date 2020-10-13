import React, { Component } from 'react';


class Mylist extends Component {

    constructor() {
        super()
        this.getFromLocalStorage = this.getFromLocalStorage.bind(this)
        this.state = {
            localStorage: [],
            movies: [],
            movieIds: this.getFromLocalStorage()

        }
        console.log(localStorage)
    }

    getFromLocalStorage() {

        let mylist = localStorage.getItem('my-list');
        // mylist = JSON.parse(mylist);
        console.log(mylist)

    }
    componentDidMount() {


        fetch(`http://api.themoviedb.org/3/movie/${this.state.movieIds}? api_key=134d92c3d72c8501356da2496ace8c7e`)
        .then(res => res.json())
         .then(json => json[0]); 
        
    }


    render() {
       
        return (
            <div>
                My List
                <button onClick={this.getFromLocalStorage}>Clique</button>
            </div>
        )
    }
} export default Mylist 