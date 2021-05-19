import './App.css';
import { v1 as uuidv1 } from 'uuid'
import ListMovies from"./Component/ListMovies"
import React, { useState } from "react";
import AddModal from "./Component/AddModal"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component() {
  state={
    movies:[
      {
        id:uuidv1(),
        title: "Jumanji",
        image:
        "https://cdn-static.egybest.net/serve/movies/art-2799680260-x300.jpg",
        rating: "5",
        year: "2019"
      },
      {
        id:uuidv1(),
        title: "Insane",
        image:
          "https://cdn-static.egybest.net/serve/movies/art-0177839168-x300.jpg",
        rating: "2",
        year: "2010"
      },
      {
          id:uuidv1(),
          title: "The Box",
          image:
          "https://cdn-static.egybest.net/serve/movies/art-0510929107-x300.jpg",
          rating: "4",
          year: "2009"
        },
        {
          id:uuidv1(),
          title: "Sonic",
          image:
            "https://cdn-static.egybest.net/serve/movies/art-2838056871-x300.jpg",
          rating: "3",
          year: "2020"
        },
         
    ], keyword:'',
          keyrate:'',

  }
  add = NewMovie => {
    this.setState({
      movies: this.state.movies.concat(NewMovie)
    });
  };
  search = newSearch => {
    this.setState({keyword: newSearch})
  }

  
  render(){

    return (
      <div className="App">
        <header className="header-app">
  <h1>MoviesApp</h1>
  <ListMovies movies={this.state.movies}/>
  <AddModal addMovies={(newMovie)=>this.add(newMovie)} />
  </header>
  </div>
    );
  }
  }
  

export default App;
